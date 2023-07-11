<p align="center">
<img src="https://s2.loli.net/2023/06/19/547qRecHdnJIbKu.png" height="128">
</p>
<h1 align="center"> Final2x </h1>

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

## Screenshots
<div align="center">
<img src="https://s2.loli.net/2023/06/30/3QU5ReYra8tDfWb.png" width="350" /><img src="https://s2.loli.net/2023/06/30/8mcjXFgtlSAOP9u.png" width="350" />
</div>

<div align="center">
<img src="https://s2.loli.net/2023/07/01/YOsgZFkXCu5bAqP.png" width="256" /><img src="https://s2.loli.net/2023/07/01/9QGbK2A4uERU31W.png" width="64" /><img src="https://s2.loli.net/2023/07/01/B8PWVl3ZMeQFkHs.png" width="256" />
</div>
<h5 align="center"> use Final2x to perform 4x super-resolution on a 256x256 Lenna image </h5>


## Installation
#### Download the latest release from [here](https://github.com/Tohrusky/Final2x/releases)

### Windows
Just Run!

### MacOS
```bash
sudo spctl --master-disable
# Disable Gatekeeper, then allow applications downloaded from anywhere in System Preferences > Security & Privacy > General
xattr -cr /Applications/Final2x.app
```
In first time, you need to run the command above in terminal to allow the app to run, and first process may very slow because of Apple's Check.

### Linux
#### For General Linux (Suggested, download linux-pip)
Python >= 3.6, then check install in terminal
```bash
pip install Final2x-core
Final2x-core -o # 114514
apt install -y libomp5 xdg-utils
```

#### For Deb/Ubuntu
set 777 permission for the file and resources folder


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
- [xinntao/Real-ESRGAN-ncnn-vulkan](https://github.com/xinntao/Real-ESRGAN-ncnn-vulkan) - This project provided the core implementation of the Real-ESRGAN algorithm using the ncnn and Vulkan
libraries.
- [nihui/waifu2x-ncnn-vulkan](https://github.com/nihui/waifu2x-ncnn-vulkan) - This project provided the core implementation of the Waifu2x algorithm using the ncnn and Vulkan libraries.
- [nihui/srmd-ncnn-vulkan](https://github.com/nihui/srmd-ncnn-vulkan) - This project provided the core implementation of the SRMD algorithm using the ncnn and Vulkan libraries.


## License
This project is licensed under the BSD 3-Clause - see
the [LICENSE file](https://github.com/Tohrusky/Final2x/blob/main/LICENSE) for details.


## Acknowledgements
Feel free to reach out to the project maintainers with any questions or concerns. Happy image super-resolution!

[![Star History Chart](https://api.star-history.com/svg?repos=Tohrusky/Final2x&type=Date)](https://star-history.com/#Tohrusky/Final2x&Date)
