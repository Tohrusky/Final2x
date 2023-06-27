class Utils {
  static getCurrentLocale(): string {
    return navigator?.language?.split('-')[0] || 'en'
  }

  static sleep(timeout): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, timeout))
  }

  static DeepDeepSleep(miliseconds): void {
    const currentTime = new Date().getTime()
    while (currentTime + miliseconds >= new Date().getTime()) {
      /* empty */
    }
  }
}

export const { getCurrentLocale, sleep, DeepDeepSleep } = Utils
