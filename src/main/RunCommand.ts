import { spawn, spawnSync } from 'child_process'
import path from 'path'
import { app } from 'electron'

let child

export async function RunCommand(
  event,
  config_json: string,
  openOutputFolder: boolean
): Promise<void> {
  let resourceUrl: string

  // ---- 还是直接传base64吧
  // config_json = JSON.stringify(config_json) // 转义转义
  // ----
  config_json = Buffer.from(config_json, 'utf8').toString('base64')

  if (!CheckPipPackage()) {
    if (process.env.NODE_ENV === 'development') {
      resourceUrl = path.join(app.getAppPath(), '/resources/Final2x-core/Final2x-core')
    } else {
      resourceUrl = path.join(app.getAppPath(), '/resources/Final2x-core/Final2x-core')
    }
  } else {
    resourceUrl = 'Final2x-core'
  }

  let command = `"${resourceUrl}" -b ${config_json}`

  if (!openOutputFolder) {
    command += ' -n'
  }

  console.log(command)

  child = spawn(command, { shell: true })

  child.stdout.on('data', (data) => {
    event.sender.send('command-stdout', data.toString())
  })

  child.stderr.on('data', (data) => {
    event.sender.send('command-stderr', data.toString())
  })

  child.on('close', (code) => {
    event.sender.send('command-close-code', code)
  })
}

export async function KillCommand(): Promise<void> {
  if (child) {
    child.kill()
  }
}

function CheckPipPackage(): boolean {
  const command = `Final2x-core -h`

  const result = spawnSync(command, { shell: true, encoding: 'utf-8' })

  return result.status === 0
}
