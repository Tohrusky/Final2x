<a href="https://socialify.git.ci/Tohrusky/Final2x/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FTohrusky%2FTohrusky%2Fmain%2Ficon%2Flogo.png&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://socialify.git.ci/Tohrusky/Final2x/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FTohrusky%2FTohrusky%2Fmain%2Ficon%2Flogo-dark.png&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://socialify.git.ci/Tohrusky/Final2x/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FTohrusky%2FTohrusky%2Fmain%2Ficon%2Flogo.png&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light" />
    <img alt="Socialify Image" src="https://socialify.git.ci/Tohrusky/Final2x/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FTohrusky%2FTohrusky%2Fmain%2Ficon%2Flogo.png&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light" />
  </picture>
</a>

<p align="center">English | <a href="README_i18n/README_zh.md">中文</a></p>

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

This is a powerful tool that allows for image super-resolution to arbitrary sizes using multiple models, designed to enhance the resolution and quality of images, making them clearer and more detailed. Presently, it supports several models, such as RealCUGAN, RealESRGAN, Waifu2x, and SRMD.

## [Documentation](https://final2x.tohru.top)

## Comparison
<div align="center">
<img src="https://s2.loli.net/2023/07/20/hWi4U6BNeqau3MF.png" />
</div>
<h5 align="center"> use Final2x to perform 4x super-resolution on a 256x256 Hutao RGBA image </h5>


## Installation
#### [Download the latest release from here.](https://github.com/Tohrusky/Final2x/releases)

### Windows
Just Run! Furthermore, you can use package mananger to install and upgrade.
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
In first time, you need to run the command above in terminal to allow the app to run, and first process may very slow because of Apple's Check.

### Linux
#### For General Linux (Suggested, download linux-pip)
Python >= 3.8, then check install in terminal.
```bash
pip install Final2x-core
Final2x-core -o # 114514
apt install -y libomp5 xdg-utils
```

#### For Deb/Ubuntu
Set 777 permission for the file and resources folder.


## Features
- Cross-platform: The tool is available for Windows x64/arm64, MacOS x64/arm64, and Linux x64, allowing users to enjoy the benefits of super-resolution regardless of their operating system.
- Super-resolution: The tool employs advanced algorithms and models to upscale images, significantly increasing their resolution without sacrificing quality.
- [Multiple models](https://github.com/Tohrusky/Final2x-core): It offers a wide range of models that can be used to achieve different levels of super-resolution, allowing users to choose the one that best suits their specific needs.
- Customizable Scale: Users have the flexibility to specify the desired output size for their images, ranging from small enhancements to large-scale super-resolution.
- i18n: The tool is available in English, Chinese, and Japanese, allowing users from different countries to enjoy the benefits of super-resolution.


## Reference
The following references were referenced in the development of this project:

- [Final2x-core](https://github.com/Tohrusky/Final2x-core) - This project provided the core of the Final2x algorithm using the ncnn and Vulkan libraries.
- [naive-ui](https://github.com/tusen-ai/naive-ui) - This project provided the UI framework for the Final2x.
- [electron-vite](https://github.com/alex8088/electron-vite) - This project provided the build framework for the Final2x.
- [ncnn](https://github.com/Tencent/ncnn) - ncnn is a high-performance neural network inference framework developed by Tencent AI Lab.
- [nihui/realcugan-ncnn-vulkan](https://github.com/nihui/realcugan-ncnn-vulkan) - This project provided the core implementation of the Real-CUGAN algorithm using the ncnn and Vulkan libraries.
- [xinntao/Real-ESRGAN-ncnn-vulkan](https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan) - This project provided the core implementation of the Real-ESRGAN algorithm using the ncnn and Vulkan.
libraries.
- [nihui/waifu2x-ncnn-vulkan](https://github.com/nihui/waifu2x-ncnn-vulkan) - This project provided the core implementation of the Waifu2x algorithm using the ncnn and Vulkan libraries.
- [nihui/srmd-ncnn-vulkan](https://github.com/nihui/srmd-ncnn-vulkan) - This project provided the core implementation of the SRMD algorithm using the ncnn and Vulkan libraries.


## License
This project is licensed under the BSD 3-Clause - see
the [LICENSE file](https://github.com/Tohrusky/Final2x/blob/main/LICENSE) for details.


## Acknowledgements
Feel free to reach out to the project maintainers with any questions or concerns. Happy image super-resolution!

<a href="https://star-history.com/#Tohrusky/Final2x&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Tohrusky/Final2x&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Tohrusky/Final2x&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Tohrusky/Final2x&type=Date" />
  </picture>
</a>
