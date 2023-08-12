/**
 * @vitest-environment jsdom
 */

import { useGlobalSettingsStore } from '../../src/renderer/src/store/globalSettingsStore'
import { updateDeviceList } from '../../src/renderer/src/utils/updateDeviceList'
import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia, storeToRefs } from 'pinia'

describe('updateDeviceList', () => {
  beforeEach(() => {
    // 创建一个新 pinia，并使其处于激活状态
    setActivePinia(createPinia())
  })

  it('test_updateDeviceList', () => {
    const { deviceList } = storeToRefs(useGlobalSettingsStore())
    const devices: Array<string> = ['M1', 'Apple M1']
    const devices_cpu: Array<string> = ['M1']
    const devices_none: Array<string> = []

    const expectList: Array<{ label: string; value: number }> = [
      { label: 'CPU: M1', value: -1 },
      { label: 'GPU 0: Apple M1', value: 0 },
      { label: 'GPU: Auto', value: 114514 }
    ]

    const expectList_cpu: Array<{ label: string; value: number }> = [
      { label: 'CPU: M1', value: -1 },
      { label: '[Maybe Unavailable] GPU 0', value: 0 },
      { label: '[Maybe Unavailable] GPU 1', value: 1 },
      { label: 'GPU: Auto', value: 114514 }
    ]
    const expectList_none: Array<{ label: string; value: number }> = [
      { label: '[Maybe Unavailable] CPU', value: -1 },
      { label: '[Maybe Unavailable] GPU 0', value: 0 },
      { label: '[Maybe Unavailable] GPU 1', value: 1 },
      { label: 'GPU: Auto', value: 114514 }
    ]

    updateDeviceList(devices)
    expect(JSON.stringify(deviceList.value)).toEqual(JSON.stringify(expectList))
    updateDeviceList(devices_cpu)
    expect(JSON.stringify(deviceList.value)).toEqual(JSON.stringify(expectList_cpu))
    updateDeviceList(devices_none)
    expect(JSON.stringify(deviceList.value)).toEqual(JSON.stringify(expectList_none))
  })
})
