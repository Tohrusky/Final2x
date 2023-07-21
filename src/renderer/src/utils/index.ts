class Utils {
  /**
   * @description 返回当前环境语言
   */
  static getCurrentLocale(): string {
    return navigator?.language?.split('-')[0] || 'en'
  }

  /**
   * @description 返回语言，和语言数量
   * @param id 语言id 0-> en, 1-> zh, 2-> ja
   */
  static getLanguage(id: number): { lang: string; numLang: number } {
    const langs = ['en', 'zh', 'ja']
    return {
      lang: langs[id],
      numLang: langs.length
    }
  }

  /**
   * @description 等待一段时间
   * @param timeout 等待时间，单位毫秒
   */
  static sleep(timeout: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, timeout))
  }

  /**
   * @description Deep, Dark, Fantasy? 真·深度睡眠
   * @param miliseconds 等待时间，单位毫秒
   */
  static DeepDeepSleep(miliseconds: number): void {
    const currentTime = new Date().getTime()
    while (currentTime + miliseconds >= new Date().getTime()) {
      /* empty */
    }
  }
}

export const { getCurrentLocale, getLanguage, sleep, DeepDeepSleep } = Utils
