import { describe, expect, it } from 'vitest'
import { GetModelNoiseOptionsByNameAndScale } from '../../src/renderer/src/utils/ModelOptions'

describe('GetModelNoiseOptionsByNameAndScale', () => {
  it('returns the correct options for RealCUGAN-se and scale 2', () => {
    const Model = 'RealCUGAN-se'
    const Scale = 2
    const expectedOptions = [
      { label: '-1', value: -1 },
      { label: '0', value: 0 },
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 }
    ]
    const options = GetModelNoiseOptionsByNameAndScale(Model, Scale)
    expect(options).toEqual(expectedOptions)
  })

  it('returns the correct options for RealCUGAN-se and scale 3 or 4', () => {
    const Model = 'RealCUGAN-se'

    const expectedOptions = [
      { label: '-1', value: -1 },
      { label: '0', value: 0 },
      { label: '3', value: 3 }
    ]
    const options = GetModelNoiseOptionsByNameAndScale(Model, 3)
    expect(options).toEqual(expectedOptions)
    const options2 = GetModelNoiseOptionsByNameAndScale(Model, 4)
    expect(options2).toEqual(expectedOptions)
  })

  it('returns the correct options for RealCUGAN-pro and scale 2 or 3', () => {
    const Model = 'RealCUGAN-pro'
    const expectedOptions = [
      { label: '-1', value: -1 },
      { label: '0', value: 0 },
      { label: '3', value: 3 }
    ]
    const options = GetModelNoiseOptionsByNameAndScale(Model, 2)
    expect(options).toEqual(expectedOptions)
    const options2 = GetModelNoiseOptionsByNameAndScale(Model, 3)
    expect(options2).toEqual(expectedOptions)
  })

  it('returns the correct options for RealESRGAN-animevideov3', () => {
    const Model = 'RealESRGAN-animevideov3'
    const expectedOptions = [{ label: '0', value: 0 }]
    const options = GetModelNoiseOptionsByNameAndScale(Model, 2)
    expect(options).toEqual(expectedOptions)
  })

  it('returns the correct options for RealESRGAN', () => {
    const Model = 'RealESRGAN'
    const expectedOptions = [{ label: '0', value: 0 }]
    const options = GetModelNoiseOptionsByNameAndScale(Model, 2)
    expect(options).toEqual(expectedOptions)
  })

  it('returns the correct options for RealESRGAN-anime', () => {
    const Model = 'RealESRGAN-anime'
    const expectedOptions = [{ label: '0', value: 0 }]
    const options = GetModelNoiseOptionsByNameAndScale(Model, 2)
    expect(options).toEqual(expectedOptions)
  })

  it('returns the correct options for Waifu2x-cunet and scale', () => {
    const Model = 'Waifu2x-cunet'
    const Scale = 1
    const expectedOptions = [
      { label: '0', value: 0 },
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 }
    ]
    const options = GetModelNoiseOptionsByNameAndScale(Model, Scale)
    expect(options).toEqual(expectedOptions)
  })

  it('returns the correct options for Waifu2x-cunet and scale 2', () => {
    const Model = 'Waifu2x-cunet'
    const Scale = 2
    const expectedOptions = [
      { label: '-1', value: -1 },
      { label: '0', value: 0 },
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 }
    ]
    const options = GetModelNoiseOptionsByNameAndScale(Model, Scale)
    expect(options).toEqual(expectedOptions)
  })

  it('returns the correct options for Waifu2x-upconv_7_anime_style_art_rgb and scale 2', () => {
    const Model = 'Waifu2x-upconv_7_anime_style_art_rgb'
    const Scale = 2
    const expectedOptions = [
      { label: '-1', value: -1 },
      { label: '0', value: 0 },
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 }
    ]
    const options = GetModelNoiseOptionsByNameAndScale(Model, Scale)
    expect(options).toEqual(expectedOptions)
  })

  it('returns the correct options for Waifu2x-upconv_7_photo and scale 2', () => {
    const Model = 'Waifu2x-upconv_7_photo'
    const Scale = 2
    const expectedOptions = [
      { label: '-1', value: -1 },
      { label: '0', value: 0 },
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 }
    ]
    const options = GetModelNoiseOptionsByNameAndScale(Model, Scale)
    expect(options).toEqual(expectedOptions)
  })

  it('returns the invalid options', () => {
    const Model = 'genshinimpact'
    const Scale = 5
    const expectedOptions = [{ label: '0', value: 0 }]
    const options = GetModelNoiseOptionsByNameAndScale(Model, Scale)
    expect(options).toEqual(expectedOptions)
  })
})
