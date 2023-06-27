import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSRSettingsStore = defineStore(
  'SRSettings',
  () => {
    const selectedModel = ref('RealCUGAN-pro')
    const selectedScale = ref(2)
    const selectedNoise = ref(-1)
    const useTTA = ref(false)
    const CustomScaleValue = ref(0)

    return {
      selectedModel,
      selectedScale,
      selectedNoise,
      useTTA,
      CustomScaleValue
    }
  },
  {
    persist: {
      storage: localStorage,
      paths: ['selectedModel', 'selectedScale', 'selectedNoise', 'useTTA', 'CustomScaleValue']
    }
  }
)
