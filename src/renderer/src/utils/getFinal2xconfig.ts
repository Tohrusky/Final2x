import { storeToRefs } from 'pinia'
import { useSRSettingsStore } from '../store/SRSettingsStore'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
import ioPath from '../utils/IOPath'
import PathFormat from '../utils/pathFormat'

/**
 * @description: 返回输出路径，如果输出路径不合法，则从第一个输入路径构造一个合法输出路径
 */
function getOutPutPATH(): string {
  if (!PathFormat.checkPath(ioPath.getoutputpath())) {
    const inputPATHList = ioPath.getList()
    const pathFormat = new PathFormat()
    pathFormat.setRootPath(inputPATHList[0])
    ioPath.setoutputpath(pathFormat.getRootPath())
  }
  return ioPath.getoutputpath()
}

/**
 * @description: 返回最终的json字符串配置文件
 */
export const getFinal2xconfig = (): string => {
  const { selectedModel, selectedScale, selectedNoise, useTTA, CustomScaleValue } = storeToRefs(
    useSRSettingsStore()
  )
  const { SRgpuid } = storeToRefs(useGlobalSettingsStore())

  const gpuID = SRgpuid.value === 114514 ? 0 : SRgpuid.value
  const inputPATHList = ioPath.getList()
  const outputPATH = getOutPutPATH()
  const targetScale = CustomScaleValue.value === null ? 0 : CustomScaleValue.value
  return JSON.stringify({
    gpuid: gpuID,
    inputpath: inputPATHList,
    model: selectedModel.value,
    modelscale: selectedScale.value,
    modelnoise: selectedNoise.value,
    outputpath: outputPATH,
    targetscale: targetScale,
    tta: useTTA.value
  })
}
