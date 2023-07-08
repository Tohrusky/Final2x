import { storeToRefs } from 'pinia'
import { useSRSettingsStore } from '../store/SRSettingsStore'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
import ioPath from '../utils/IOPath'

// {
//   "gpuid": 0, // GPU id, >= -1 (-1 for CPU, may not work for some models.)
//   "inputpath": [
//     // Input image paths, should be a list.
//     "path/to/img1.jpg",
//     "path/to/img2.png"
//   ],
//   "model": "RealCUGAN-pro", // model name
//   "modelscale": 2, // model upscale factor
//   "modelnoise": -1, // DENOISE level
//   "outputpath": "path/to/output", // output path
//   "targetscale": 2.0,
//   // Target upscale factor, upscale multiple times to achieve the target upscale factor.
//   // If not invalid, use modelscale.
//   "tta": false // Test Time Augmentation, default false
// }

// export interface Final2xConfigType {
//   gpuid: number
//   inputpath: string[]
//   model: string
//   modelscale: number
//   modelnoise: number
//   outputpath: string
//   targetscale: number
//   tta: boolean
// }

export const getFinal2xconfig = (): string => {
  const { selectedModel, selectedScale, selectedNoise, useTTA, CustomScaleValue } = storeToRefs(
    useSRSettingsStore()
  )
  const { SRgpuid } = storeToRefs(useGlobalSettingsStore())
  const gpuID = SRgpuid.value === 114514 ? 0 : SRgpuid.value
  const outputPATH = ioPath.getoutputpath()
  const inputPATHList = ioPath.getList()
  return JSON.stringify({
    gpuid: gpuID,
    inputpath: inputPATHList,
    model: selectedModel.value,
    modelscale: selectedScale.value,
    modelnoise: selectedNoise.value,
    outputpath: outputPATH,
    targetscale: CustomScaleValue.value,
    tta: useTTA.value
  })
}
