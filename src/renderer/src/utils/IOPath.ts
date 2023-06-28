import { storeToRefs } from 'pinia'
import { useIOPathStore } from '../store/ioPathStore'

class ioPATH {
  static add(id: string, path: string): void {
    const { inputpathMap } = storeToRefs(useIOPathStore())
    if (path != '') {
      inputpathMap.value.set(id, path)
    }
  }

  static delete(id: string): void {
    const { inputpathMap } = storeToRefs(useIOPathStore())
    inputpathMap.value.delete(id)
  }

  static getByID(id: string): string {
    const { inputpathMap } = storeToRefs(useIOPathStore())
    return inputpathMap.value.get(id) || ''
  }

  static getAllPath(): string {
    const { inputpathMap } = storeToRefs(useIOPathStore())
    // return inputpath key and value with string
    let inputpath = ''
    inputpathMap.value.forEach((value, key) => {
      inputpath += key + ' : ' + value + '\n'
    })
    return inputpath
  }

  static getList(): string[] {
    const { inputpathMap } = storeToRefs(useIOPathStore())
    // return inputpath value with String List
    return Array.from(inputpathMap.value.values())
  }

  static isEmpty(): boolean {
    const { inputpathMap } = storeToRefs(useIOPathStore())
    return inputpathMap.value.size == 0
  }

  static show(): string {
    const inputpathList = ioPATH.getList()
    console.log('inputpathList: ', inputpathList)
    let inputpathListString = ''
    for (const i in inputpathList) {
      inputpathListString += inputpathList[i] + '\n'
    }
    return inputpathListString
  }

  static setoutputpathManual(path: string): boolean {
    const { outputpath, outputpathLock } = storeToRefs(useIOPathStore())
    if (path != '') {
      outputpath.value = path
      outputpathLock.value = true
      console.log('outputpath SET SUCCESS!')
      return true
    }
    return false
  }

  static setoutputpath(path: string): void {
    const { outputpath, outputpathLock } = storeToRefs(useIOPathStore())
    if (path != '' && outputpathLock.value == false) {
      outputpath.value = path
    } else {
      console.log('outputpath Lock!')
    }
  }

  static getoutputpath(): string {
    const { outputpath } = storeToRefs(useIOPathStore())
    return outputpath.value
  }

  static clearALL(): void {
    const { inputpathMap, inputFileList } = storeToRefs(useIOPathStore())
    inputpathMap.value.clear()
    inputFileList.value = []
  }
}

export default ioPATH
