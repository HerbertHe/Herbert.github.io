---
title: M系列芯片MacOS初始化esp-idf环境指北
date: 2024-9-8 23:29:37
toc: true
tags: [ esp-idf, macos, esp32, esp32s3 ]
---

## 写在前面的

在很多年不搞硬件开发的今天，Arduino 是我去实现最小 demo 和一些创意想法的首选。得益于乐鑫 ESP32 系列芯片的低价格，这同样也是我做小的创意的首选。但噩梦的开始就是，选择了一款第三方的集成 ESP32S3 和 LCD 屏的开发板，Arduino 的 demo 看着很复杂。作为一名程序员，抱着 “知其然，要知其所以然” 的想法，开始尝试在我的 M1 MacOS 上搭建 esp-idf 环境，参考乐鑫官方的原生 API 和库进行开发。

> 最主要的原因是，乐鑫官方的精力都在 esp-idf 上，Arduino 上比较慢。想从官方的 “较底层” 开始，但多年不搞硬件，不太熟悉了。

## 顺手解决一下 Arduino 的环境问题

一般情况下，几乎所有淘宝的商家，在 Arduino 开发 esp32 的教程上都会给 esp32 的 GitHub 原生文件地址。但国内极差的网络环境，加上乐鑫官方的 json 文件指向大都是 GitHub 的 releases，因此就顺手写了个代理的项目 [HerbertHe/arduino-esp32-mirror](https://github.com/herberthe/arduino-esp32-mirror)。

可以用 <https://ibert.me/arduino-esp32-mirror/package_esp32_index.json> 替换乐鑫官方的 json 文件（每天自动更新一次）。

## 搭建适配 M 系列芯片的 esp-idf 环境

参考了乐鑫官方的文档，但是这里面太多的坑。

- [Linux 和 macOS 平台工具链的标准设置](https://docs.espressif.com/projects/esp-idf/zh_CN/latest/esp32/get-started/linux-macos-setup.html)

### 安装必要的依赖

> 默认 macOS 用户都有 Homebrew，并配置好了 Tuna 源。默认开启了 Apple Rosetta 2。

- 安装 CMake 和 Ninja：

```bash
brew install cmake ninja dfu-util
```

- 安装 Python 3

```bash
brew install python3
```

- 获取 ESP-IDF

官方的文档如下：

```bash
mkdir -p ~/esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
```

建议替换掉 ~~`git clone --recursive https://github.com/espressif/esp-idf.git`~~ 使用下面的命令：

```bash
git clone --recursive https://gitclone.com/github.com/espressif/esp-idf.git
```

ESP-IDF 下载到 `~/esp/esp-idf` 目录下。

- 设置工具

```bash
cd ~/esp/esp-idf
export IDF_GITHUB_ASSETS="dl.espressif.com/github_assets" # 使用乐鑫的下载渠道
./install.sh esp32,esp32s3
```

- 设置环境变量

因为 macOS 默认的 shell 是 `zsh`，所以直接修改 `~/.zprofile` 文件来配置 alias 和激活虚拟环境。

```bash
sudo nano ~/.zprofile
```

向文件写入 `alias get_idf='. $HOME/esp/esp-idf/export.sh`，保存并退出。

- 激活配置文件和虚拟环境

```bash
source ~/.zprofile # 在当前环境激活配置文件
get_idf # 激活虚拟环境
```

### 然后就是噩梦的开始

结果一个 hello world 一编译就报错，看了一下报错日志，就是 submodule 的问题。

```bash
cd ~/esp/esp-idf
git submodule sync
git submodule update --init --recursive
```

一下一个不吱声，拉下来的时候各种报错。
