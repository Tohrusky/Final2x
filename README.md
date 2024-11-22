<a href="https://socialify.git.ci/Tohrusky/Final2x/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FTohrusky%2FTohrusky%2Fmain%2Ficon%2Flogo.png&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://socialify.git.ci/Tohrusky/Final2x/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FTohrusky%2FTohrusky%2Fmain%2Ficon%2Flogo-dark.png&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://socialify.git.ci/Tohrusky/Final2x/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FTohrusky%2FTohrusky%2Fmain%2Ficon%2Flogo.png&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light" />
    <img alt="Socialify Image" src="https://socialify.git.ci/Tohrusky/Final2x/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2FTohrusky%2FTohrusky%2Fmain%2Ficon%2Flogo.png&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light" />
  </picture>
</a>

![MacOS x64](https://img.shields.io/badge/Support-MacOS%20x64-blue?logo=Apple&style=flat-square)
![MacOS arm64](https://img.shields.io/badge/Support-MacOS%20arm64-blue?logo=Apple&style=flat-square)
![Windows x64](https://img.shields.io/badge/Support-Windows%20x64-blue?logo=Windows&style=flat-square)
![Windows arm64](https://img.shields.io/badge/Support-Windows%20arm64-blue?logo=Windows&style=flat-square)
![Linux x64](https://img.shields.io/badge/Support-Linux%20x64-blue?logo=Linux&style=flat-square)
[![CI-test](https://github.com/Tohrusky/Final2x/actions/workflows/CI-test.yml/badge.svg)](https://github.com/Tohrusky/Final2x/actions/workflows/CI-test.yml)
[![CI-build](https://github.com/Tohrusky/Final2x/actions/workflows/CI-build.yml/badge.svg)](https://github.com/Tohrusky/Final2x/actions/workflows/CI-build.yml)
[![Release](https://github.com/Tohrusky/Final2x/actions/workflows/Release.yml/badge.svg)](https://github.com/Tohrusky/Final2x/actions/workflows/Release.yml)
![Download](https://img.shields.io/github/downloads/Tohrusky/Final2x/total)
![GitHub](https://img.shields.io/github/license/Tohrusky/Final2x)

This is a powerful tool that allows for image super-resolution to arbitrary sizes using [multiple models](./src/renderer/src/utils/ModelOptions.ts), designed to enhance the resolution and quality of images, making them clearer and more detailed.

- News🎉: We are thrilled to announce the release of Final2x v2.0.0, which marks a major milestone as we transition to utilizing [ccrestoration](https://github.com/TensoRaws/ccrestoration) (PyTorch) for our algorithm implementation.
- News🎉: Want to enhance your video? Try [FinalRip](https://github.com/TensoRaws/FinalRip)!

### Comparison

<div align="center">
<img src="https://s2.loli.net/2023/07/20/hWi4U6BNeqau3MF.png" />
</div>
<h5 align="center"> use Final2x to perform 4x super-resolution on a 256x256 Hutao RGBA image </h5>

## Screenshots

<div align=center>
<a href="https://sm.ms/image/NjpeUqToEc5kW12" target="_blank"><img src="https://s2.loli.net/2024/11/08/NjpeUqToEc5kW12.png" width="40%"></a>
<a href="https://sm.ms/image/IeHzQuKFJPLc6Vp" target="_blank"><img src="https://s2.loli.net/2024/11/08/IeHzQuKFJPLc6Vp.png" width="40%"></a>
</div>

### Installation

##### [Download the latest release from here.](https://github.com/Tohrusky/Final2x/releases)

#### Windows

Just Run! Furthermore, you can use package mananger to install and upgrade.

##### winget

```bash
winget install Final2x
```

#### MacOS

```bash
sudo spctl --master-disable
# Disable Gatekeeper, then allow applications downloaded from anywhere in System Preferences > Security & Privacy > General
xattr -cr /Applications/Final2x.app
```

In first time, you need to run the command above in terminal to allow the app to run.

#### Linux

For Linux User, you need to install the dependencies first.

Make sure you have Python >= 3.9 and PyTorch >= 1.13 installed

```bash
pip install Final2x-core
Final2x-core -h # check if the installation is successful
apt install -y libomp5 xdg-utils
```

### Reference

The following references were referenced in the development of this project:

- [Final2x-core](https://github.com/Tohrusky/Final2x-core)
- [ccrestoration](https://github.com/TensoRaws/ccrestoration)
- [PyTorch](https://github.com/pytorch/pytorch)
- [ncnn](https://github.com/Tencent/ncnn)
- [naive-ui](https://github.com/tusen-ai/naive-ui)
- [electron-vite](https://github.com/alex8088/electron-vite)

### License

This project is licensed under the BSD 3-Clause - see
the [LICENSE file](https://github.com/Tohrusky/Final2x/blob/main/LICENSE) for details.

### Acknowledgements

Feel free to reach out to the project maintainers with any questions or concerns~

<a href="https://star-history.com/#Tohrusky/Final2x&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Tohrusky/Final2x&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Tohrusky/Final2x&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Tohrusky/Final2x&type=Date" />
  </picture>
</a>
