import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'
import { LogInst } from 'naive-ui'
import type { NaiveDarkModeType } from 'naive-dark-mode'

export const useGlobalSettingsStore = defineStore(
  'GlobalSettings',
  () => {
    const darkMode: Ref<NaiveDarkModeType> = ref('system')
    const globalcolor = ref('#fffafa')
    const naiveTheme: Ref<any> = ref(undefined)

    const changeRoute = ref(false)

    const langsNum = ref(114514)

    const SRgpuid = ref(114514)
    const deviceList: Ref<any[]> = ref([])

    const ProgressPercentage = ref(0)
    const CommandLOG = ref('')
    const logInstRef = ref<LogInst | null>(null)
    const StartCommandLock = ref(false)
    const SrSuccess = ref(false)

    return {
      darkMode,
      globalcolor,
      naiveTheme,
      changeRoute,
      langsNum,
      SRgpuid,
      deviceList,
      ProgressPercentage,
      CommandLOG,
      StartCommandLock,
      SrSuccess,
      logInstRef
    }
  },
  {
    persist: {
      storage: localStorage,
      paths: ['langsNum', 'SRgpuid', 'darkMode', 'naiveTheme', 'globalcolor', 'deviceList']
    }
  }
)
