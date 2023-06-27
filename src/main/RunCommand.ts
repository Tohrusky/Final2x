import { spawn } from 'child_process'
import path from 'path'
import { app } from 'electron'

let child

export async function RunCommand(event, config_json: string): Promise<void> {
  let resourceUrl: string
  if (process.env.NODE_ENV === 'development') {
    resourceUrl = path.join(app.getAppPath(), '/resources/Final2x-core/Final2x-core')
  } else {
    resourceUrl = path.join(app.getAppPath(), '/resources/Final2x-core/Final2x-core')
  }
  config_json = JSON.stringify(config_json) // 转义
  const command = `${resourceUrl} -j ${config_json}`
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
