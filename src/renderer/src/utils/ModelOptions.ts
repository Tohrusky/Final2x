import {ref, Ref} from "vue";

/**
 * @description: all SR models provided by ccrestoration
 */
export const modelOptions: Ref<any[]> = ref([
  { label: 'RealESRGAN_RealESRGAN_x2plus_2x', value: 'RealESRGAN_RealESRGAN_x2plus_2x.pth' },
  { label: 'RealESRGAN_AnimeJaNai_HD_V3_Compact_2x', value: 'RealESRGAN_AnimeJaNai_HD_V3_Compact_2x.pth' },
])
