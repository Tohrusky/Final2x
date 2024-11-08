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
  const { selectedModel, ghProxy, targetScale } = storeToRefs(useSRSettingsStore())
  const { SRdevice } = storeToRefs(useGlobalSettingsStore())

  const inputPATHList = ioPath.getList()
  const outputPATH = getOutPutPATH()
  return JSON.stringify({
    pretrained_model_name: selectedModel.value,
    device: SRdevice.value,
    gh_proxy: ghProxy.value,
    target_scale: targetScale.value,
    output_path: outputPATH,
    input_path: inputPATHList
  })
}
