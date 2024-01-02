// download Final2x-core from https://github.com/Final2x/Final2x-core/releases
// and put it in resources folder

import fetch from 'node-fetch'
import extract from 'extract-zip'
import fs from 'fs'
import path from 'path'

const __dirname = path.resolve()

// 判断当前平台
const PLATFORM = process.platform
// 判断当前平台架构
const ARCH = process.arch

const coreDict = {
  'macos-arm64':
    'https://github.com/Final2x/Final2x-core/releases/download/2024-01-01/Final2x-core-macos-arm64.zip',
  'macos-x64':
    'https://github.com/Final2x/Final2x-core/releases/download/2024-01-01/Final2x-core-macos-latest.zip',
  'linux-x64':
    'https://github.com/Final2x/Final2x-core/releases/download/2024-01-01/Final2x-core-ubuntu-20.04.zip',
  'windows-x64':
    'https://github.com/Final2x/Final2x-core/releases/download/2024-01-01/Final2x-core-windows-latest.zip'
}

async function downloadAndUnzip(url, targetPath) {
  const zipFileName = path.basename(url)
  const zipFilePath = path.join(targetPath, zipFileName)

  const res = await fetch(url)
  const dest = fs.createWriteStream(zipFilePath)

  dest.on('finish', () => {
    console.log(`Download ${zipFileName} success!`)
    // 解压缩文件
    extract(zipFilePath, { dir: path.join(targetPath, 'Final2x-core') })
      .then(() => {
        console.log(`Unzip ${zipFileName} success!`)
        // 删除压缩包
        fs.unlinkSync(zipFilePath)
        console.log(`Delete ${zipFileName} success!`)
      })
      .catch((err) => {
        console.error(err)
      })
  })

  res.body.pipe(dest)
}

async function downloadAndUnzipCore(platform) {
  const url = coreDict[platform]
  if (!url) {
    console.error('Invalid platform')
    return
  }

  const targetPath = path.join(__dirname, 'resources')
  console.log(`Target path: ${targetPath}`)

  if (fs.existsSync(path.join(targetPath, 'Final2x-core'))) {
    console.log('Final2x-core already exists, skip download!')
    return
  }

  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true })
  }

  await downloadAndUnzip(url, targetPath)
}

console.log('-'.repeat(50))
console.log(`Platform: ${PLATFORM}`, `| Arch: ${ARCH}`)

// 选择要下载的平台
let platformToDownload = ''
if (PLATFORM === 'darwin') {
  platformToDownload = ARCH === 'arm64' ? 'macos-arm64' : 'macos-x64'
} else if (PLATFORM === 'linux') {
  platformToDownload = 'linux-x64'
} else if (PLATFORM === 'win32') {
  platformToDownload = 'windows-x64'
} else {
  console.error('Unsupported platform!')
  process.exit(1)
}

console.log(`Downloading Final2x-core for ${platformToDownload}...`)
// 执行下载和解压
downloadAndUnzipCore(platformToDownload)
  .then()
  .catch((err) => {
    console.error(err)
  })
