import si from 'systeminformation'

export async function getSystemInfo(): Promise<Array<string>> {
  const deviceList: Array<string> = []
  // get device list : cpu & GPU
  const cpu = await si.cpu()
  const gpus = await si.graphics()
  deviceList.push(String(cpu.brand))
  for (const i in gpus.controllers) {
    deviceList.push(gpus.controllers[i].model)
  }
  return deviceList
}
