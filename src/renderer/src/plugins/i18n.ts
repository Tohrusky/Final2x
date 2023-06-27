import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import zh from '../locales/zh.json'
import ja from '../locales/ja.json'

import { getCurrentLocale } from '../utils'

const i18n = createI18n({
  legacy: false,
  locale: getCurrentLocale(),
  fallbackLocale: 'en',
  globalInjection: true, // 全局注册$t方法
  messages: {
    en,
    zh,
    ja
  }
})

export default i18n
