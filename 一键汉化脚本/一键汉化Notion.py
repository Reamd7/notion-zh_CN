import json
import logging
import os
import shutil
import subprocess
import zipfile
from pathlib import Path
import time
from datetime import datetime
import pyautogui
import requests
import winshell
import psutil
import tkinter as tk
from tkinter import messagebox, scrolledtext
import sys
import pythoncom

global root, log_text


def print_current_time(message):
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_message = f"{message} - 当前时间: {current_time}"
    print(log_message)
    log_text.insert(tk.END, log_message + "\n")
    log_text.see(tk.END)
    root.update()  # 更新GUI


def activate_notion(notion_shortcut):
    print_current_time("启动Notion")
    if notion_shortcut.exists():
        subprocess.Popen(['start', '', str(notion_shortcut)], shell=True)
        print_current_time("成功启动Notion")
    else:
        print("Notion.lnk 文件不存在,请确认是否安装Notion")
        logging.error("Notion.lnk 文件不存在,请确认是否安装Notion")


def hot_reload_notion():
    print_current_time("执行热重载开始,需要等待5秒完成")
    try:
        pyautogui.keyDown('ctrl')
        pyautogui.keyDown('shift')
        pyautogui.press('r')
        pyautogui.keyUp('shift')
        pyautogui.keyUp('ctrl')
        countdown("热重载", 5)
        print_current_time("执行热重载结束")
    except Exception as e:
        print(f"执行热重载时出错: {e}")
        logging.exception("执行热重载时出错")


def update_notion_assets():
    folder_path = Path(f'C:\\Users\\{os.getlogin()}\\AppData\\Roaming\\Notion\\notionAssetCache-v2')
    latest_version_path = folder_path / 'latestVersion.json'
    try:
        with open(latest_version_path, 'r', encoding='utf-8') as file:
            latest_version = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError, Exception) as e:
        print(f'读取latestVersion.json文件时出错: {e}')
        logging.exception("读取latestVersion.json文件时出错")
        return

    print_current_time("更新assets.json文件开始")
    assets_json_path = folder_path / latest_version['version'] / 'assets.json'
    if not assets_json_path.exists():
        print(f'{assets_json_path} 文件不存在。')
        logging.error(f'{assets_json_path} 文件不存在。')
        return

    try:
        with open(assets_json_path, 'r', encoding='utf-8') as file:
            assets_data = json.load(file)
        for locale_key, locale_value in assets_data.items():
            if isinstance(locale_value, dict):
                for key in list(locale_value.keys()):
                    if key == 'en-US':
                        assets_data[locale_key][key] = assets_data[locale_key].get('zh-CN', '')
        with open(assets_json_path, 'w', encoding='utf-8') as file:
            json.dump(assets_data, file, ensure_ascii=False, indent=2)
        print('成功更新assets.json文件。')
    except (FileNotFoundError, json.JSONDecodeError, Exception) as e:
        print(f'处理assets.json文件时出错: {e}')
        logging.exception("处理assets.json文件时出错")
    print_current_time("更新assets.json程序结束")


def get_notion_shortcut_target(inside_notion_shortcut):
    pythoncom.CoInitialize()
    inside_notion_shortcut = str(inside_notion_shortcut)
    if not os.path.exists(inside_notion_shortcut):
        print(f"快捷方式不存在: {inside_notion_shortcut}")
        logging.error(f"快捷方式不存在: {inside_notion_shortcut}")
        return ""
    try:
        shortcut = winshell.shortcut(inside_notion_shortcut)
        return shortcut.path
    except Exception as e:
        print(f"读取快捷方式时出错: {e}")
        logging.exception("读取快捷方式时出错")
        return ""


def is_process_running(process_name):
    """检查指定名称的进程是否正在运行"""
    for proc in psutil.process_iter(['name']):
        if proc.info['name'] == process_name:
            return True
    return False


def restart_notion(notion_shortcut):
    print_current_time("重启Notion程序,需要等待5秒")
    notion_process_name = 'Notion.exe'

    if is_process_running(notion_process_name):
        try:
            subprocess.run(["taskkill", "/F", "/IM", notion_process_name], check=True)
            print(f"成功: 已终止进程 '{notion_process_name}'。")
        except subprocess.CalledProcessError as e:
            print(f"错误: 无法终止进程 '{notion_process_name}'。原因: {e}")
            logging.exception(f"无法终止进程 '{notion_process_name}'。")
    else:
        print(f"进程 '{notion_process_name}' 未在运行。")

    countdown("Notion启动", 3)
    print_current_time("Notion重启完成")
    activate_notion(notion_shortcut)


def download_notion_chinesization_file(github_user="Reamd7", repo_name="notion-zh_CN", asset_name="app.win.zip",
                                       download_dir=None):
    if download_dir is None:
        download_dir = os.path.dirname(
            get_notion_shortcut_target(Path(f'C:\\Users\\{os.getlogin()}\\AppData\\Roaming\\Microsoft\\Windows\\Start '
                                            f'Menu\\Programs\\Notion.lnk')))
        if not download_dir:
            print("无法确定Notion的安装位置,将使用当前目录作为下载路径。")
            logging.warning("无法确定Notion的安装位置,将使用当前目录作为下载路径。")
            download_dir = "."

    api_url = f"https://api.github.com/repos/{github_user}/{repo_name}/releases/latest"

    def update_progress(downloaded_size, total_size):
        progress = downloaded_size / total_size * 100
        progress_bar['value'] = progress
        progress_label.config(text=f"下载进度: {downloaded_size}/{total_size} bytes")
        progress_window.update()

    progress_window = tk.Toplevel(root)
    progress_window.title("下载进度")
    progress_window.geometry("400x100")
    progress_window.transient(root)  # 将下载进度窗口设置为日志窗口的子窗口
    progress_window.grab_set()  # 模态窗口,禁用父窗口

    # 将下载进度窗口放置在日志窗口的中心位置
    progress_window.geometry(
        f"+{root.winfo_rootx() + (root.winfo_width() - 400) // 2}+{root.winfo_rooty() + (root.winfo_height() - 100) // 2}")

    progress_label = tk.Label(progress_window, text="下载进度: 0/0 bytes")
    progress_label.pack(pady=10)

    progress_bar = tk.ttk.Progressbar(progress_window, length=300, mode='determinate')
    progress_bar.pack(pady=10)

    try:
        print("正在请求最新发布版本...")
        response = requests.get(api_url)
        response.raise_for_status()
        release_data = response.json()
        release_version = release_data['tag_name']
        print(f"最新发布版本为: {release_version}")

        for asset in release_data['assets']:
            if asset['name'] == asset_name:
                download_url = asset['browser_download_url']
                try:
                    use_proxy = messagebox.askyesno("下载选项",
                                                    "是否使用本机代理进行下载?\n\n如果你不知道什么是代理,请选择 '否'")
                except Exception as e:
                    logging.exception("询问是否使用代理时出现异常:")
                    use_proxy = False

                if not use_proxy:
                    download_url = f"https://reverse-proxy.suger404.cn/proxy/{download_url}"

                os.makedirs(download_dir, exist_ok=True)
                file_path = os.path.join(download_dir, asset_name)
                print(f"开始下载 {asset_name} ...,请等待下载完成")

                download_response = requests.get(download_url, stream=True)
                download_response.raise_for_status()
                total_size_in_bytes = int(download_response.headers.get('content-length', 0))
                block_size = 1024

                with open(file_path, 'wb') as file:
                    downloaded_size = 0
                    for data in download_response.iter_content(block_size):
                        file.write(data)
                        downloaded_size += len(data)
                        update_progress(downloaded_size, total_size_in_bytes)

                if total_size_in_bytes != 0 and downloaded_size != total_size_in_bytes:
                    print("ERROR, 下载过程中出现问题")
                    logging.error("下载过程中出现问题")
                else:
                    print(f"下载完成 {asset_name}！")
                    return True

        print(f"在最新发布版中未找到文件：{asset_name}")
        logging.error(f"在最新发布版中未找到文件：{asset_name}")
        return None

    except KeyboardInterrupt:
        print("下载过程被用户中断。")
        logging.error("下载过程被用户中断。")
        return None
    except (requests.exceptions.ConnectionError, requests.exceptions.HTTPError, Exception) as e:
        print(f"下载文件时出错: {e}")
        logging.exception("下载文件时出错")
        return None

    finally:
        progress_window.grab_release()  # 释放模态窗口
        progress_window.destroy()


def unzip(source_file, target_dir):
    print_current_time("解压app.win.zip开始")
    try:
        with zipfile.ZipFile(source_file, 'r') as zip_ref:
            zip_contents = zip_ref.namelist()
            top_level_folder = os.path.commonpath(zip_contents)
            zip_ref.extractall(target_dir)
        print("解压完成。")
        full_path = Path(target_dir, top_level_folder)
        os.remove(source_file)
        print(f"已删除文件：{source_file}")
        print_current_time("解压app.win.zip结束")
        return full_path
    except (zipfile.BadZipFile, OSError, Exception) as e:
        print(f"解压文件时出错: {e}")
        logging.exception("解压文件时出错")
        return None


def move_contents_and_remove_source(full_path, target_dir):
    print_current_time("移动app文件夹内容开始")
    try:
        for item in os.listdir(full_path):
            source_item = os.path.join(full_path, item)
            target_item = os.path.join(target_dir, item)
            if os.path.exists(target_item):
                if os.path.isdir(target_item):
                    shutil.rmtree(target_item)
                else:
                    os.remove(target_item)
            shutil.move(source_item, target_item)
        if os.path.exists(full_path):
            shutil.rmtree(full_path)
        print(f"'{full_path}' 文件夹已被删除。")
        print_current_time("移动app文件夹内容完成")
    except (OSError, shutil.Error, Exception) as e:
        print(f"移动文件时出错: {e}")
        logging.exception("移动文件时出错")


def countdown(task, duration):
    for i in range(duration, 0, -1):
        countdown_msg = f"{task}倒计时 {i} 秒..."
        logging.info(countdown_msg)
        time.sleep(1)


def handle_chinesization_process(source_file_zip, target_directory):
    result = messagebox.askyesnocancel("汉化选项",
                                       "请选择:\n\n重新汉化请点击 '是'\n\n第一次使用或更新汉化文件请点击 '否'\n\n退出程序请点击 '取消'",
                                       icon='question')
    if result is None:
        print("选择了取消。")
        sys.exit()
    elif result:
        print("选择了重新汉化,跳过下载、解压和移动操作。")
    else:
        if not download_notion_chinesization_file():
            print("下载汉化文件失败,程序退出。")
            logging.error("下载汉化文件失败,程序退出。")
            sys.exit()
        target_dir = unzip(source_file_zip, target_directory)
        if target_dir:
            move_contents_and_remove_source(target_dir, target_directory)
        else:
            print("解压汉化文件失败,程序退出。")
            logging.error("解压汉化文件失败,程序退出。")
            sys.exit()


def main():
    global root, log_text  # 声明root和log_text为全局变量
    try:
        logging.basicConfig(filename='notion_chinesization_error.log', level=logging.ERROR,
                            format='%(asctime)s - %(levelname)s - %(message)s')

        root = tk.Tk()
        root.title("Notion汉化程序日志")
        root.geometry("600x400")
        root.attributes("-topmost", True)
        log_text = scrolledtext.ScrolledText(root, wrap=tk.WORD)
        log_text.pack(fill=tk.BOTH, expand=True)

        print_current_time("主程序开始")
        username = os.getlogin()
        notion_shortcut = Path(f'C:\\Users\\{username}\\AppData\\Roaming\\Microsoft\\Windows\\Start '
                               f'Menu\\Programs\\Notion.lnk')
        if not notion_shortcut.exists():
            messagebox.showinfo("提示", "未找到你的Notion程序,自行前往官网下载 https://www.notion.so/download")
            sys.exit()
        install_dir = os.path.dirname(get_notion_shortcut_target(notion_shortcut))
        if not install_dir:
            print("无法获取Notion安装目录,程序退出。")
            logging.error("无法获取Notion安装目录,程序退出。")
            sys.exit()
        source_file_zip = os.path.join(install_dir, 'app.win.zip')
        target_directory = install_dir
        handle_chinesization_process(source_file_zip, target_directory)
        activate_notion(notion_shortcut)
        countdown("Notion启动", 3)
        print_current_time("notion启动完成")
        hot_reload_notion()
        update_notion_assets()
        restart_notion(notion_shortcut)
        print_current_time("主程序结束")
        root.quit()
    except Exception as e:
        logging.exception("程序出现异常:")
    finally:
        root.quit()


if __name__ == '__main__':
    main()
