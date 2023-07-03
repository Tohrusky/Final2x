/**
 * @vitest-environment jsdom
 */

import { useGlobalSettingsStore } from '../../src/renderer/src/store/globalSettingsStore'
import { switchLanguage } from '../../src/renderer/src/utils/switchLanguage'
import { beforeEach, describe, expect, it } from 'vitest'
import { setActivePinia, createPinia, storeToRefs } from 'pinia'

describe('switchLanguage', () => {
  beforeEach(() => {
    // 创建一个新 pinia，并使其处于激活状态
    setActivePinia(createPinia())
  })

  it('test_switchLanguage', () => {
    const { langsNum } = storeToRefs(useGlobalSettingsStore())
    // 断言语言切换是否正确
    expect(langsNum.value).toBe(0) // 初始语言是 'en', 所以切换一次后应该是 'zh', 切换两次后应该是 'ja', 切换三次后应该是 'en'
    for (let i = 0; i < 30; i++) {
      expect(langsNum.value).toBe(i % 3)
      switchLanguage()
    }
  })
})
