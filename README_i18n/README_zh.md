<a href="https://socialify.git.ci/Tohrusky/Final2x/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FTohrusky%2FTohrusky%2Fmain%2Ficon%2Flogo.png&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://socialify.git.ci/Tohrusky/Final2x/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FTohrusky%2FTohrusky%2Fmain%2Ficon%2Flogo-dark.png&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://socialify.git.ci/Tohrusky/Final2x/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FTohrusky%2FTohrusky%2Fmain%2Ficon%2Flogo.png&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light" />
    <img alt="Socialify Image" src="https://socialify.git.ci/Tohrusky/Final2x/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FTohrusky%2FTohrusky%2Fmain%2Ficon%2Flogo.png&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light" />
  </picture>
</a>

<h3 align="center"> Enhance Your Images with Effortless Cross-Platform Super-Resolution at Any Scale </h3>

![MacOS x64](https://img.shields.io/badge/Support-MacOS%20x64-blue?logo=Apple&style=flat-square)
![MacOS arm64](https://img.shields.io/badge/Support-MacOS%20arm64-blue?logo=Apple&style=flat-square)
![Windows x64](https://img.shields.io/badge/Support-Windows%20x64-blue?logo=Windows&style=flat-square)
![Windows arm64](https://img.shields.io/badge/Support-Windows%20arm64-blue?logo=Windows&style=flat-square)
![Linux x64](https://img.shields.io/badge/Support-Linux%20x64-blue?logo=Linux&style=flat-square)
[![codecov](https://codecov.io/gh/Tohrusky/Final2x/branch/main/graph/badge.svg?token=LL6K2P1RS8)](https://codecov.io/gh/Tohrusky/Final2x)
[![CI-Test](https://github.com/Tohrusky/Final2x/actions/workflows/CI-Test.yml/badge.svg)](https://github.com/Tohrusky/Final2x/actions/workflows/CI-Test.yml)
[![CI-Build](https://github.com/Tohrusky/Final2x/actions/workflows/CI-Build.yml/badge.svg)](https://github.com/Tohrusky/Final2x/actions/workflows/CI-Build.yml)
[![Release](https://github.com/Tohrusky/Final2x/actions/workflows/Release.yml/badge.svg)](https://github.com/Tohrusky/Final2x/actions/workflows/Release.yml)
![Download](https://img.shields.io/github/downloads/Tohrusky/Final2x/total)
![GitHub](https://img.shields.io/github/license/Tohrusky/Final2x)

Final2x 可以使用多个模型，将图像超分辨率到任意大小，以提高图像的分辨率和质量，如获得更清晰和丰富的纹理。目前，它支持以下几个模型：RealCUGAN、RealESRGAN 及 Waifu2x。

- News🎉: 想超分辨率处理视频吗？试试 [FinalRip](https://github.com/TensoRaws/FinalRip)!

## [文档](https://final2x.tohru.top/zh)

## 图片对比

<div align="center">
<img src="https://s2.loli.net/2023/07/20/hWi4U6BNeqau3MF.png" />
</div>
<h5 align="center"> 使用 Final2x 对一张 256x256 带透明通道的 胡桃 图进行 4 倍超分辨率处理 </h5>

## 应用截图

<div align=center>
<a href="https://sm.ms/image/2QdtWyTe9DbOxJS" target="_blank"><img src="https://s2.loli.net/2023/09/19/2QdtWyTe9DbOxJS.png" width="40%"></a>
<a href="https://sm.ms/image/BhQKM2751vAGNDP" target="_blank"><img src="https://s2.loli.net/2023/09/19/BhQKM2751vAGNDP.png" width="40%"></a>
</div>

## 安装

#### [在这里下载最新的版本。](https://github.com/Tohrusky/Final2x/releases)

### Windows

点击即可使用，此外你也可以通过包管理器来安装、更新。

#### winget

```bash
winget install Final2x
```

### MacOS

```bash
sudo spctl --master-disable
# Disable Gatekeeper, then allow applications downloaded from anywhere in System Preferences > Security & Privacy > General
xattr -cr /Applications/Final2x.app
```

首次运行时，您需要在终端中运行上述命令，以允许应用程序运行。由于苹果的安全检查，第一次使用可能会非常缓慢。

### Linux

#### 对于大部分发行版(推荐, 下载linux-pip版本)

需要Python >= 3.8，然后在终端里检查是否安装成功。

```bash
pip install Final2x-core
Final2x-core -c # cache models
apt install -y libomp5 xdg-utils
```

#### 对于Deb/Ubuntu系

对 resources 目录递归设置 777 权限。

## 特性

- 跨平台：适用于 Windows x64/arm64 、MacOS x64/arm64 and Linux x64。
- 超分辨率：采用先进的算法和模型对图像进行放大处理，显著提高图像的分辨率，同时不损失质量。
- [多模型](https://github.com/Tohrusky/Final2x-core)：提供多种模型，可实现不同级别的超分辨率效果，可以根据自己的需求选择最适合的模型。
- 自定义 Scale：可以灵活指定图像的放大倍数，从而实现更精细的超分辨率效果。
- 国际化：支持英文、中文、日语、法语。

## 参考

在开发过程中，参考了以下项目：

- [Final2x-core](https://github.com/Final2x/Final2x-core) - This project provided the core of the Final2x algorithm using the ncnn and Vulkan libraries.
- [naive-ui](https://github.com/tusen-ai/naive-ui) - This project provided the UI framework for the Final2x.
- [electron-vite](https://github.com/alex8088/electron-vite) - This project provided the build framework for the Final2x.
- [ncnn](https://github.com/Tencent/ncnn) - ncnn is a high-performance neural network inference framework developed by Tencent AI Lab.
- [nihui/realcugan-ncnn-vulkan](https://github.com/nihui/realcugan-ncnn-vulkan) - This project provided the core implementation of the Real-CUGAN algorithm using the ncnn and Vulkan libraries.
- [xinntao/Real-ESRGAN-ncnn-vulkan](https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan) - This project provided the core implementation of the Real-ESRGAN algorithm using the ncnn and Vulkan.
  libraries.
- [nihui/waifu2x-ncnn-vulkan](https://github.com/nihui/waifu2x-ncnn-vulkan) - This project provided the core implementation of the Waifu2x algorithm using the ncnn and Vulkan libraries.

## 许可证

This project is licensed under the BSD 3-Clause - see
the [LICENSE file](https://github.com/Tohrusky/Final2x/blob/main/LICENSE) for details.

## Acknowledgements

如果您有任何问题或疑虑，请随时联系该项目的维护人员。祝您玩得开心！

<a href="https://star-history.com/#Tohrusky/Final2x&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Tohrusky/Final2x&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Tohrusky/Final2x&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Tohrusky/Final2x&type=Date" />
  </picture>
</a>
