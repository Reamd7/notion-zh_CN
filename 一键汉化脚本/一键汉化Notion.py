import json
import logging
import os
import subprocess
import sys
import time
import tkinter as tk
from datetime import datetime
from pathlib import Path
from tkinter import messagebox, scrolledtext

import pyautogui
import win32con
import win32gui
import winshell

global root, log_text


def print_current_time(message, seconds=None):
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_message = f"{message} - 当前时间: {current_time}"

    # 无论是否有倒计时，都先在GUI中显示日志消息
    log_text.insert(tk.END, log_message + "\n")
    log_text.see(tk.END)
    root.update()  # 强制更新GUI界面

    # 如果提供了seconds参数，则执行倒计时
    if seconds is not None:
        for i in range(seconds, 0, -1):
            mins, secs = divmod(i, 60)
            time_format = '{:02d}:{:02d}'.format(mins, secs)
            countdown_message = f"倒计时: {time_format}"
            # 更新GUI中的倒计时，每次倒计时后自动换行
            log_text.insert(tk.END, countdown_message + "\n")
            log_text.see(tk.END)
            root.update()  # 强制更新GUI界面以显示倒计时
            time.sleep(1)
        log_text.insert(tk.END, "倒计时结束！\n")
        log_text.see(tk.END)
        root.update()


def start_notion(notion_shortcut):
    print_current_time("启动Notion")
    # 以管理员启动程序，这里会继承
    os.startfile(notion_shortcut)


def delete_user_directory():
    # 获取当前用户的个人资料目录
    user_profile = os.environ['USERPROFILE']

    # 使用动态路径删除Notion文件夹
    notion_dir = os.path.join(user_profile, "AppData", "Roaming", "Notion")
    if os.path.exists(notion_dir):
        os.system(f'rd /s /q "{notion_dir}"')
        print(f"目录 {notion_dir} 已删除")
        print_current_time("缓存已删除，等待启动软件", 2)

    else:
        print(f"目录 {notion_dir} 不存在")


def check_file_and_delete_if_missing(folder_path, latest_version_file):
    # 使用Path.exists()检查目录和文件是否存在
    folder_exists = Path(folder_path).exists()
    file_exists = Path(latest_version_file).exists()

    # 如果目录和文件有一个不存在，则调用delete_user_directory函数删除缓存
    if not folder_exists or not file_exists:
        delete_user_directory()

    else:
        print(f"{folder_path}存在，不删除缓存")


def set_notion_focus():
    def callback(hwnd, extra):

        if win32gui.GetClassName(hwnd) == "Chrome_WidgetWin_1" and win32gui.GetWindowLong(hwnd,
                                                                                          win32con.GWL_STYLE) == 0x16CF0000:
            try:

                win32gui.SetForegroundWindow(hwnd)
            except:
                logging.error("找到Notion窗口，但是窗口没有加载完毕导致失败，重启运行汉化程序即可")
                sys.exit("找到Notion窗口，但是窗口没有加载完毕导致失败，重启运行汉化程序即可")
            print(f"Set focus to: {hwnd}")
            print_current_time(f"Notion窗口被成功置于前台，句柄为{hwnd}")

    win32gui.EnumWindows(callback, None)


def hot_reload_notion(latest_version_file):
    retries = 5  # 设置重试次数

    if latest_version_file.exists():
        print("文件存在，热重载操作成功。")
        print_current_time("执行热重载结束")
        return

    for attempt in range(1, retries + 1):
        set_notion_focus()
        print_current_time(f"第{attempt}次尝试 : 热重载开始, 预计60秒完成")
        print(f"第{attempt}次尝试")

        pyautogui.keyDown('ctrl')
        pyautogui.keyDown('shift')
        pyautogui.keyDown('r')

        pyautogui.keyUp('r')
        pyautogui.keyUp('ctrl')
        pyautogui.keyUp('shift')

        print_current_time("等待生成latestVersion等配置文件", 12)
        print("等待生成latestVersion等配置文件")

        if latest_version_file.exists():
            print("文件存在，热重载操作成功。")
            print_current_time("执行热重载结束")
            break
        else:
            print("重载失败，重试中...")
            print_current_time("重载失败，重试中...")

    else:  # 如果所有重试结束仍未找到文件，则认为失败
        print("未找到最新版本文件，热重载操作未成功。")
        logging.exception("热重载操作未成功")
        sys.exit("热重载失败，退出程序。")


def update_notion_assets(folder_path):
    latest_version_path = folder_path / 'latestVersion.json'
    try:
        with open(latest_version_path, 'r', encoding='utf-8') as file:
            latest_version = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError, Exception) as e:
        print(f'找不到latestVersion.json文件: {e}')
        logging.exception("更新assets.json前，找不到最新版本文件")
        sys.exit()

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
        print_current_time('成功更新assets.json文件。')
        print('成功更新assets.json文件。')
    except (FileNotFoundError, json.JSONDecodeError, Exception) as e:
        print(f'处理assets.json文件时出错: {e}')
        logging.exception("处理assets.json文件时出错")
    print_current_time("更新assets.json程序结束")


def get_notion_shortcut_target(inside_notion_shortcut):
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
        sys.exit("读取快捷方式时出错")


def kill_notion():
    # 列出所有正在运行的进程
    tasks = subprocess.check_output(['tasklist']).decode('utf-8', 'ignore')
    # 检查Notion.exe是否在进程列表中
    if 'Notion.exe' in tasks:
        # 如果Notion正在运行，关闭它
        subprocess.run(['taskkill', '/im', 'Notion.exe', '/f'])

        print("Notion 被关闭了")
        # 等待确保完全杀死进程
        print_current_time("正在关闭 Notion ", 5)
    else:
        # 如果Notion没有运行，不执行任何操作
        print("Notion 没有运行")
        print_current_time("Notion 没有运行")


def handle_chinesization_process(folder_path, latest_version_file):
    result = messagebox.askyesno("汉化选项",
                                 "请选择:\n\n继续汉化请点击 '是'\n\n退出程序请点击 '否'",
                                 icon='question')
    if result is None or not result:
        print("用户选择了退出程序。")
        logging.info("用户取消或选择了退出程序。")
        sys.exit()
    else:
        print("用户选择了继续汉化")
        logging.info("用户选择了继续汉化")
        # 检查文件是否存在，不存在则删除
        check_file_and_delete_if_missing(folder_path, latest_version_file)
        # delete_user_directory()


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

        # 快捷方式位置
        username = os.getlogin()
        notion_shortcut = Path(f'C:\\Users\\{username}\\AppData\\Roaming\\Microsoft\\Windows\\Start '
                               f'Menu\\Programs\\Notion.lnk')

        # 缓存位置
        folder_path = Path(f'C:/Users/{username}/AppData/Roaming/Notion/notionAssetCache-v2')
        latest_version_file = folder_path / 'latestVersion.json'

        if not notion_shortcut.exists():
            # messagebox.showinfo("提示", "未找到你的Notion程序,自行前往官网下载 https://www.notion.so/download")
            logging.exception("未找到你的Notion程序,自行前往官网下载 https://www.notion.so/download")
            sys.exit()

        # 获取Notion安装目录
        notion_install_dir = os.path.dirname(winshell.shortcut(str(notion_shortcut)).path)

        print(notion_install_dir)
        if not notion_install_dir:
            print("无法获取Notion安装目录,程序退出。")
            logging.error("无法获取Notion安装目录,程序退出。")
            sys.exit()

        # 是否汉化
        handle_chinesization_process(folder_path, latest_version_file)
        # 判断是否运行Notion，是则退出，否则往下执行
        kill_notion()

        # 启动Notion
        start_notion(notion_shortcut)
        print_current_time("Notion启动并初始化", 3)

        # 热重载Notion
        hot_reload_notion(latest_version_file)

        # 更新assets.json
        update_notion_assets(folder_path)

        kill_notion()

        start_notion(notion_shortcut)

        print_current_time("主程序结束")
        print("主程序结束")
        root.quit()
    except Exception as e:
        logging.exception(f"程序出现异常:{e}")
    finally:
        root.quit()


if __name__ == '__main__':
    main()
