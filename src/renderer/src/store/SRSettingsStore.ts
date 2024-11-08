import { ref, Ref } from 'vue'
import { defineStore } from 'pinia'

export const useSRSettingsStore = defineStore(
  'SRSettings',
  () => {
    const selectedModel = ref('RealESRGAN_RealESRGAN_x2plus_2x.pth')
    const ghProxy: Ref<string | null> = ref(null)
    const targetScale: Ref<number | null> = ref(null)

    return {
      selectedModel,
      ghProxy,
      targetScale
    }
  },
  {
    persist: {
      storage: localStorage,
      paths: ['selectedModel',  'ghProxy', 'targetScale']
    }
  }
)
