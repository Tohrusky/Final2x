import { createI18n } from 'vue-i18n'
import { en } from '../locales/en'
import { zh } from '../locales/zh'
import { ja } from '../locales/ja'
import { fr } from '../locales/fr'

import { getCurrentLocale } from '../utils'

const i18n = createI18n({
  legacy: false,
  locale: getCurrentLocale(),
  fallbackLocale: 'en',
  globalInjection: true, // 全局注册$t方法
  messages: {
    en,
    zh,
    ja,
    fr
  }
})

export default i18n
