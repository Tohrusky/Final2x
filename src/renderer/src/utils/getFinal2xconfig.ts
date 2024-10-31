import { storeToRefs } from 'pinia'
import { useSRSettingsStore } from '../store/SRSettingsStore'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
import ioPath from '../utils/IOPath'
import PathFormat from '../utils/pathFormat'

/**
 * @description: Returns the output path. If the output path is invalid, it constructs a valid output path from the first input path
 */
function getOutPutPATH(): string {
  const currentOutputPath = ioPath.getoutputpath();
  if (!PathFormat.checkPath(currentOutputPath)) {
    const inputPATHList = ioPath.getList();
    if (inputPATHList.length > 0) {
      const pathFormat = new PathFormat();
      pathFormat.setRootPath(inputPATHList[0]);
      const newOutputPath = pathFormat.getRootPath();
      ioPath.setoutputpath(newOutputPath);
      return newOutputPath;
    }
  }
  return currentOutputPath;
}

/**
 * @description: Returns the final JSON string configuration file
 */
export const getFinal2xconfig = (): string => {
  const { selectedModel, selectedScale, selectedNoise, useTTA, CustomScaleValue } =
    storeToRefs(useSRSettingsStore())
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
