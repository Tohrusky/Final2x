import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LogInst } from 'naive-ui'

export const useGlobalSettingsStore = defineStore(
  'GlobalSettings',
  () => {
    const globalcolor = ref('#fffafa')
    const DarkTheme = ref(false)

    const langsNum = ref(0)

    const SRgpuid = ref(0)
    const deviceList = ref([])

    const ProgressPercentage = ref(0)
    const CommandLOG = ref('')
    const logInstRef = ref<LogInst | null>(null)
    const StartCommandLock = ref(false)

    return {
      globalcolor,
      DarkTheme,
      langsNum,
      SRgpuid,
      deviceList,
      ProgressPercentage,
      CommandLOG,
      StartCommandLock,
      logInstRef
    }
  },
  {
    persist: {
      storage: localStorage,
      paths: ['langsNum', 'SRgpuid', 'DarkTheme', 'globalcolor']
    }
  }
)
