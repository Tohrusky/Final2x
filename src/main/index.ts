import { app, BrowserWindow, ipcMain, Menu, nativeImage, shell, Tray } from 'electron'
import { join } from 'path'
import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import { getSystemInfo } from './getSystemInfo'
import { KillCommand, RunCommand } from './RunCommand'
import { openDirectory } from './openDirectory'

const icon = join(__dirname, '../../resources/icon.png')
const trayIcon = join(__dirname, '../../resources/tray.png')

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 680,
    height: 480,
    // maxWidth: 800,
    minWidth: 680,
    // maxHeight: 600,
    minHeight: 480,
    frame: process.platform !== 'darwin',
    titleBarStyle: 'hiddenInset',
    show: false,
    autoHideMenuBar: true,
    icon: nativeImage.createFromPath(icon),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  if (process.platform === 'darwin') {
    app.dock.setIcon(nativeImage.createFromPath(icon))
  }

  ipcMain.handleOnce('getSystemInfo', getSystemInfo)

  ipcMain.on('execute-command', RunCommand)

  ipcMain.on('kill-command', KillCommand)

  ipcMain.on('open-directory-dialog', openDirectory)

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

let tray
function setTray(): void {
  const Image = nativeImage.createFromPath(trayIcon)
  Image.setTemplateImage(true)
  tray = new Tray(Image)

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Open',
      click: (): void => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      }
    },
    {
      label: 'Exit',
      click: (): void => {
        app.quit()
      }
    }
  ])

  tray.setToolTip('Final2x')
  tray.setContextMenu(contextMenu)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  setTray()
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
