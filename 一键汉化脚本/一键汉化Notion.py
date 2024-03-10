import json
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
from tqdm import tqdm
import psutil  # 引入psutil库


def print_current_time(message):
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"{message} - 当前时间: {current_time}")


def activate_notion():
    print_current_time("启动Notion")
    notion_lnk_path = (f'C:\\Users\\{os.getlogin()}\\AppData\\Roaming\\Microsoft\\Windows\\Start '
                       f'Menu\\Programs\\Notion.lnk')
    if os.path.exists(notion_lnk_path):
        # 使用 Popen 来启动 Notion 并显示窗口
        subprocess.Popen(['start', '', notion_lnk_path], shell=True)
        print_current_time("成功启动Notion")
    else:
        print("Notion.lnk 文件不存在，请确认是否安装Notion")


def hot_reload_notion():
    print_current_time("执行热重载开始,需要等待5秒完成")

    pyautogui.keyDown('ctrl')
    pyautogui.keyDown('shift')
    pyautogui.press('r')
    pyautogui.keyUp('shift')
    pyautogui.keyUp('ctrl')

    # 尽量不要改动，以防notion没有完成重载，导致没有及时生成notionAssetCache-v2文件夹下的相关配置
    countdown("热重载", 5)

    print_current_time("执行热重载结束")


def update_notion_assets():
    folder_path = Path(f'C:\\Users\\{os.getlogin()}\\AppData\\Roaming\\Notion\\notionAssetCache-v2')
    latest_version_path = folder_path / 'latestVersion.json'

    if not latest_version_path.exists():
        print('未找到latestVersion.json文件。')
        return

    with open(latest_version_path, 'r', encoding='utf-8') as file:
        latest_version = json.load(file)

    print_current_time("更新assets.json文件开始")
    assets_json_path = folder_path / latest_version['version'] / 'assets.json'

    if not assets_json_path.exists():
        print(f'{assets_json_path} 文件不存在。')
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

    except Exception as e:
        print(f'处理文件时出错: {e}')
        return

    print_current_time("更新assets.json程序结束")


def get_notion_shortcut_target(inside_notion_shortcut):
    # 确保路径是字符串
    inside_notion_shortcut = str(inside_notion_shortcut)

    if not os.path.exists(inside_notion_shortcut):
        print(f"快捷方式不存在: {inside_notion_shortcut}")
        return None

    try:
        shortcut = winshell.shortcut(inside_notion_shortcut)
        return shortcut.path
    except Exception as e:
        print(f"读取快捷方式时出错: {e}")
        return None


def is_process_running(pid):
    """检查指定PID的进程是否正在运行"""
    return psutil.pid_exists(pid)


def restart_notion():
    try:
        print_current_time("重启Notion程序,需要等待5秒")

        # 获取当前所有Notion进程的信息
        processes = [proc for proc in psutil.process_iter(['pid', 'name']) if proc.info['name'] == 'Notion.exe']
        notion_pids = [proc.info['pid'] for proc in processes]

        # 遍历并结束所有Notion进程
        for pid in notion_pids:
            if is_process_running(pid):
                # 如果进程正在运行，则尝试结束它
                subprocess.run(["taskkill", "/F", "/PID", str(pid)])
                print(f"成功: 已终止进程 'Notion.exe'，其 PID 为 {pid}。")
            else:
                print(f"错误: 无法终止进程 'Notion.exe'，其 PID 为 {pid}。原因: 没有此任务的实例在运行。")

        # 延迟一段时间确保程序已经完全关闭
        countdown("Notion启动", 3)

        print_current_time("Notion重启完成")

        activate_notion()

    except subprocess.CalledProcessError as e:
        print(f"结束Notion进程时遇到错误: {e}")
    except FileNotFoundError as e:
        print(e)
    except Exception as e:
        print(f"重启Notion时遇到未预期的错误: {e}")


def download_notion_chinesization_file(github_user="Reamd7", repo_name="notion-zh_CN", asset_name="app.win.zip",
                                       download_dir=None):
    if download_dir is None:
        download_dir = os.path.dirname(
            get_notion_shortcut_target(Path(f'C:\\Users\\{os.getlogin()}\\AppData\\Roaming\\Microsoft\\Windows\\Start '
                                            f'Menu\\Programs\\Notion.lnk')))

        # 测试安装路径
        # print(download_dir)

        if download_dir is None:
            print("无法确定Notion的安装位置，将使用当前目录作为下载路径。")
            download_dir = "."

    api_url = f"https://api.github.com/repos/{github_user}/{repo_name}/releases/latest"
    try:
        print("正在请求最新发布版本...")
        response = requests.get(api_url)
        response.raise_for_status()  # 确保请求成功
        release_data = response.json()
        release_version = release_data['tag_name']  # 获取最新版本号
        print(f"最新发布版本为: {release_version}")

        asset_found = False

        for asset in release_data['assets']:
            if asset['name'] == asset_name:
                download_url = asset['browser_download_url']

                while True:
                    print("如果你不知道什么是本机代理，输入n即可,输入数字0取消")
                    use_proxy = input("是否使用本机代理进行下载? (y/n):").strip().lower()
                    if use_proxy == 'y':
                        break  # 用户选择使用本机代理，不修改下载链接，直接跳出循环
                    elif use_proxy == 'n':
                        # 用户选择不使用本机代理，则对下载链接进行拼接
                        download_url = f"https://reverse-proxy.suger404.cn/proxy/{download_url}"
                        break  # 修改了下载链接，跳出循环
                    elif use_proxy == '0':
                        return
                    else:
                        print("输入错误，请输入'y'表示是或'n'表示否。")

                # 检查下载目录是否存在，若不存在则创建
                os.makedirs(download_dir, exist_ok=True)
                file_path = os.path.join(download_dir, asset_name)  # 设置文件路径

                print(f"开始下载 {asset_name} ...,请等待下载完成")

                download_response = requests.get(download_url, stream=True)
                download_response.raise_for_status()  # 确保下载请求成功

                total_size_in_bytes = int(download_response.headers.get('content-length', 0))
                block_size = 1024  # 1 KB

                progress_bar = tqdm(total=total_size_in_bytes, unit='iB', unit_scale=True)
                with open(file_path, 'wb') as file:  # 使用文件路径
                    for data in download_response.iter_content(block_size):
                        progress_bar.update(len(data))
                        file.write(data)
                progress_bar.close()

                if total_size_in_bytes != 0 and progress_bar.n != total_size_in_bytes:
                    print("ERROR, 下载过程中出现问题")
                else:
                    print(f"下载完成 {asset_name}！")

                return True

        if not asset_found:
            print(f"在最新发布版中未找到文件：{asset_name}")
        return None
    except requests.exceptions.ConnectionError as e:
        print(f"连接错误，无法下载文件: {e}")
        return None
    except requests.exceptions.HTTPError as e:
        print(f"HTTP错误，无法下载文件: {e}")
        return None
    except Exception as e:
        print(f"发生错误: {e}")
        return None


def unzip(source_file, target_dir):
    print_current_time("解压app.win.zip开始")
    with zipfile.ZipFile(source_file, 'r') as zip_ref:
        # 获取zip文件中所有目录和文件的列表
        zip_contents = zip_ref.namelist()
        # 通常第一个返回的名称是目录名称
        top_level_folder = os.path.commonpath(zip_contents)
        zip_ref.extractall(target_dir)
    print("解压完成。")

    # 构建顶级目录的完整路径
    full_path = Path(target_dir, top_level_folder)

    # 尝试删除源zip文件
    try:
        os.remove(source_file)
        print(f"已删除文件：{source_file}")
    except OSError as e:
        print(f"无法删除文件：{source_file}，错误：{e}")

    print_current_time("解压app.win.zip结束")
    return full_path


def move_contents_and_remove_source(full_path, target_dir):
    print_current_time("移动app文件夹内容开始")
    # 遍历 source_dir 下所有文件和文件夹
    for item in os.listdir(full_path):
        source_item = os.path.join(full_path, item)
        target_item = os.path.join(target_dir, item)

        # 检查目标位置是否已存在与源同名的文件或文件夹
        if os.path.exists(target_item):
            # 如果是文件夹，则删除它
            if os.path.isdir(target_item):
                shutil.rmtree(target_item)
            # 如果是文件，则删除它
            else:
                os.remove(target_item)

        # 移动文件或文件夹到目标位置
        shutil.move(source_item, target_item)

    # 移动完成后删除source_dir指向的app文件夹
    if os.path.exists(full_path):
        shutil.rmtree(full_path)

        print(f"'{full_path}' 文件夹已被删除。")
    print_current_time("移动app文件夹内容完成")


def countdown(task, duration):
    # 实现倒计时功能
    for i in range(duration, 0, -1):
        print(f"{task}倒计时 {i} 秒...")
        time.sleep(1)
    # print_current_time("Notion启动完成")


def handle_chinesization_process(source_file_zip, target_directory):
    choice = input("如需重新汉化，请按0；更新汉化文件或首次使用，请按1：")

    if choice == '1':
        # 下载汉化文件
        download_notion_chinesization_file()

        # 解压并删除app.win.zip 指定zip文件路径和目的解压目录
        target_dir = unzip(source_file_zip, target_directory)

        # 移动app文件夹下的内容至Notion文件夹
        move_contents_and_remove_source(target_dir, target_directory)
    elif choice == '0':
        # 用户选择重新汉化，可以在这里添加相关逻辑，例如提示信息或直接返回不执行后续操作
        print("选择了重新汉化，跳过下载、解压和移动操作。")
    else:
        # 万一按错了，不终止程序，而是重新询问
        print("无效选择，请重新选择。")
        handle_chinesization_process(source_file_zip, target_directory)


def main():
    # 获取系统用户名
    username = os.getlogin()

    # 链接指向的程序路径
    notion_shortcut = Path(f'C:\\Users\\{username}\\AppData\\Roaming\\Microsoft\\Windows\\Start '
                           f'Menu\\Programs\\Notion.lnk')
    if not notion_shortcut.exists():
        print("未找到你的Notion程序，自行前往官网下载 https://www.notion.so/download")
        return

    # 安装目录
    install_dir = os.path.dirname(get_notion_shortcut_target(notion_shortcut))

    # 设置源文件和目标目录
    source_file_zip = os.path.join(install_dir, 'app.win.zip')
    target_directory = install_dir

    print_current_time("主程序开始")

    # 询问用户是否重新汉化、更新汉化文件或是第一次使用
    handle_chinesization_process(source_file_zip, target_directory)

    # 启动notion
    activate_notion()
    countdown("Notion启动", 3)
    print_current_time("notion启动完成")

    # 热重载目的是为了生成notionAssetCache-v2文件夹及内部配置
    hot_reload_notion()

    # 更新assets.json文件
    update_notion_assets()

    # 重启notion
    restart_notion()

    print_current_time("主程序结束")


if __name__ == '__main__':
    main()
