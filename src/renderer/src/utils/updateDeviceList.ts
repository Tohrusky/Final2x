import { storeToRefs } from 'pinia'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'

/**
 * @description 更新 DeviceList
 * @param devices 设备列表，从 node 侧获取
 */
export function updateDeviceList(devices: Array<string>): void {
  console.log(devices)
  const { deviceList } = storeToRefs(useGlobalSettingsStore())
  const getdevicelist: any[] = []
  if (devices.length === 0) {
    // No device detected
    console.log('No device detected, try push CPU, GPU 0 and CPU 1')
    getdevicelist.push({ label: '[Maybe Unavailable] CPU', value: -1 })
    getdevicelist.push({ label: '[Maybe Unavailable] GPU 0', value: 0 })
    getdevicelist.push({ label: '[Maybe Unavailable] GPU 1', value: 1 })
  } else if (devices.length === 1) {
    // CPU only
    console.log('CPU only, try push GPU 0 and CPU 1')
    getdevicelist.push({ label: 'CPU: ' + String(devices[0]), value: -1 })
    getdevicelist.push({ label: '[Maybe Unavailable] GPU 0', value: 0 })
    getdevicelist.push({ label: '[Maybe Unavailable] GPU 1', value: 1 })
  } else {
    // 正常情况
    for (const i in devices) {
      const deviceType = Number(i) === 0 ? 'CPU: ' : 'GPU ' + String(Number(i) - 1) + ': '
      getdevicelist.push({ label: deviceType + String(devices[i]), value: Number(i) - 1 })
    }
  }
  // 自动选择，gpuid = 0
  getdevicelist.push({ label: 'GPU: Auto', value: 114514 })

  if (JSON.stringify(deviceList.value) !== JSON.stringify(getdevicelist)) {
    deviceList.value = getdevicelist
  } else {
    console.log('deviceList not change')
  }
  console.log(getdevicelist)
}
