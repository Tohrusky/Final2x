/**
 * @vitest-environment jsdom
 */

import { useGlobalSettingsStore } from '../../src/renderer/src/store/globalSettingsStore'
import { switchCSSStyle, switchTheme } from '../../src/renderer/src/utils/DarkModeColor'
import { sleep } from '../../src/renderer/src/utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { setActivePinia, createPinia, storeToRefs } from 'pinia'

describe('switchTheme', () => {
  beforeEach(() => {
    // 创建一个新 pinia，并使其处于激活状态
    setActivePinia(createPinia())
  })

  it('test_switchTheme', () => {
    const { DarkTheme } = storeToRefs(useGlobalSettingsStore())
    // 断言主题切换是否正确, 初始主题是 'light-theme', 切换一次后应该是 'dark-theme', 切换两次后应该是 'light-theme'
    expect(DarkTheme.value).toBe(false)
    for (let i = 0; i < 10; i++) {
      switchTheme()
      expect(DarkTheme.value).toBe(i % 2 === 0)
    }
  })
})

describe('switchCSSStyle', () => {
  beforeEach(() => {
    // 创建一个新 pinia，并使其处于激活状态
    setActivePinia(createPinia())
  })

  it('test_switchCSSStyle', async () => {
    const { globalcolor } = storeToRefs(useGlobalSettingsStore())
    expect(globalcolor.value).toBe('#fffafa') // 初始颜色是 '#fffafa' 白色
    switchCSSStyle('dark-theme')
    await sleep(1000)
    expect(globalcolor.value).toBe('#000000') // 切换 dark-theme 后应该是 '#000000' 黑色
    switchCSSStyle('light-theme')
    await sleep(1000)
    expect(globalcolor.value).toBe('#fffafa') // 切换 light-theme 后应该是 '#fffafa' 白色
  })
})
