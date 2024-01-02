import { SelectOption } from 'naive-ui'

/**
 * @description: 模型选项-GPU
 */
export const modelOptions: SelectOption[] = [
  { label: 'RealCUGAN-se', value: 'RealCUGAN-se' },
  { label: 'RealCUGAN-pro', value: 'RealCUGAN-pro' },
  { label: 'RealESRGAN-animevideov3', value: 'RealESRGAN-animevideov3' },
  { label: 'RealESRGAN', value: 'RealESRGAN' },
  { label: 'RealESRGAN-anime', value: 'RealESRGAN-anime' },
  { label: 'Waifu2x-cunet', value: 'Waifu2x-cunet' },
  { label: 'Waifu2x-upconv_7_anime_style_art_rgb', value: 'Waifu2x-upconv_7_anime_style_art_rgb' },
  { label: 'Waifu2x-upconv_7_photo', value: 'Waifu2x-upconv_7_photo' }
]

/**
 * @description: 模型 -> 模型Scale
 */
export interface ModelScaleOptionsType {
  [key: string]: SelectOption[]
}

/**
 * @description: 模型Scale选项
 */
export const modelScaleOptions: ModelScaleOptionsType = {
  'RealCUGAN-se': [
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 }
  ],
  'RealCUGAN-pro': [
    { label: '2', value: 2 },
    { label: '3', value: 3 }
  ],
  'RealESRGAN-animevideov3': [
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 }
  ],
  RealESRGAN: [{ label: '4', value: 4 }],
  'RealESRGAN-anime': [{ label: '4', value: 4 }],
  'Waifu2x-cunet': [
    { label: '1', value: 1 },
    { label: '2', value: 2 }
  ],
  'Waifu2x-upconv_7_anime_style_art_rgb': [{ label: '2', value: 2 }],
  'Waifu2x-upconv_7_photo': [{ label: '2', value: 2 }]
}

/**
 * @description: 由模型和Scale获取Noise选项
 * @param Model 模型
 * @param Scale 模型Scale
 */
export function GetModelNoiseOptionsByNameAndScale(Model: string, Scale: number): SelectOption[] {
  if (Model === 'RealCUGAN-se') {
    if (Scale === 2) {
      return [
        { label: '-1', value: -1 },
        { label: '0', value: 0 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 }
      ]
    } else if (Scale === 3 || Scale === 4) {
      return [
        { label: '-1', value: -1 },
        { label: '0', value: 0 },
        { label: '3', value: 3 }
      ]
    }
  } else if (Model === 'RealCUGAN-pro') {
    if (Scale === 2 || Scale === 3) {
      return [
        { label: '-1', value: -1 },
        { label: '0', value: 0 },
        { label: '3', value: 3 }
      ]
    }
  } else if (
    Model === 'RealESRGAN-animevideov3' ||
    Model === 'RealESRGAN' ||
    Model === 'RealESRGAN-anime'
  ) {
    return [{ label: '0', value: 0 }]
  } else if (Model === 'Waifu2x-cunet') {
    if (Scale === 1) {
      return [
        { label: '0', value: 0 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 }
      ]
    } else if (Scale === 2) {
      return [
        { label: '-1', value: -1 },
        { label: '0', value: 0 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 }
      ]
    }
  } else if (Model === 'Waifu2x-upconv_7_anime_style_art_rgb') {
    if (Scale === 2) {
      return [
        { label: '-1', value: -1 },
        { label: '0', value: 0 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 }
      ]
    }
  } else if (Model === 'Waifu2x-upconv_7_photo') {
    if (Scale === 2) {
      return [
        { label: '-1', value: -1 },
        { label: '0', value: 0 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 }
      ]
    }
  }

  return [{ label: '0', value: 0 }]
}
