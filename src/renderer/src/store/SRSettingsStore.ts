import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'

export const useSRSettingsStore = defineStore(
  'SRSettings',
  () => {
    const selectedModel = ref('RealESRGAN')
    const selectedScale = ref(2)
    const selectedNoise = ref(-1)
    const useTTA = ref(false)
    const CustomScaleValue: Ref<number | null> = ref(null)

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
