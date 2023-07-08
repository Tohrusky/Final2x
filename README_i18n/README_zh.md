<p align="center">
<img src="https://s2.loli.net/2023/06/19/547qRecHdnJIbKu.png" height="128">
</p>
<h1 align="center"> Final2x </h1>

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

这是一个强大的工具，可以使用多个模型将图像超分辨率到任意大小，以提高图像的分辨率和质量，使其更清晰和更详细。目前，它支持这几个模型：RealCUGAN、RealESRGAN、Waifu2x和SRMD。

## 截图
<div align="center">
<img src="https://s2.loli.net/2023/06/30/3QU5ReYra8tDfWb.png" width="350" /><img src="https://s2.loli.net/2023/06/30/8mcjXFgtlSAOP9u.png" width="350" />
</div>

<div align="center">
<img src="https://s2.loli.net/2023/07/01/YOsgZFkXCu5bAqP.png" width="256" /><img src="https://s2.loli.net/2023/07/01/9QGbK2A4uERU31W.png" width="64" /><img src="https://s2.loli.net/2023/07/01/B8PWVl3ZMeQFkHs.png" width="256" />
</div>
<h5 align="center"> 使用Final2x对一张256x256的Lenna图进行4倍超分辨率处理 </h5>


## 安装
#### [在这里下载最新的版本](https://github.com/Tohrusky/Final2x/releases)

### Windows
直接用就好

### MacOS
```bash
sudo spctl --master-disable
# Disable Gatekeeper, then allow applications downloaded from anywhere in System Preferences > Security & Privacy > General
xattr -cr /Applications/Final2x.app
```
首次运行时，您需要在终端中运行上述命令，以允许应用程序运行。由于苹果的安全检查，第一次使用可能会非常缓慢。

### Linux
#### 对于大部分发行版(推荐, 下载linux-pip版本)
需要Python >= 3.6, 然后在终端里检查是否安装成功
```bash
pip install Final2x-core
Final2x-core -o # 114514
```

#### 对于Deb/Ubuntu系
对resources目录递归设置777权限


## 特性
- 跨平台：适用于 Windows x64/arm64 、MacOS x64/arm64 and Linux x64。
- 超分辨率：采用先进的算法和模型对图像进行放大处理，显著提高图像的分辨率，同时不损失质量。
- [多模型](https://github.com/Tohrusky/Final2x-core)：提供多种模型，可实现不同级别的超分辨率效果，可以根据自己的需求选择最适合的模型。
- 自定义 Scale：可以灵活指定图像的放大倍数，从而实现更精细的超分辨率效果。
- 国际化：支持英文、中文和日文。


## 参考
在开发过程中，参考了以下项目：

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
如果您有任何问题或疑虑，请随时联系该项目的维护人员。祝您玩得开心！

[![Star History Chart](https://api.star-history.com/svg?repos=Tohrusky/Final2x&type=Date)](https://star-history.com/#Tohrusky/Final2x&Date)
