<script lang="ts" setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { NText, NIcon, NUpload, NUploadDragger, useNotification, UploadFileInfo } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { FileImageOutlined } from '@vicons/antd'

import PathFormat from '../utils/pathFormat'
import ioPATH from '../utils/IOPath'
import { useIOPathStore } from '../store/ioPathStore'

const { t } = useI18n()
const notification = useNotification()
const useIOPath = useIOPathStore()
const { inputFileList } = storeToRefs(useIOPath)

const pathFormat = new PathFormat()

class Final2xHomeNotifications {
  static handleremove(s: string): void {
    notification.success({
      title: t('Final2xHome.text0'),
      content: s,
      duration: 1000
    })
  }
}

onMounted(() => {
  const dragWrapper = document.getElementById('file_drag')
  dragWrapper.addEventListener('drop', (e) => {
    //阻止默认行为
    e.preventDefault()
    //获取文件列表
    const files = e.dataTransfer.files

    if (files && files.length > 0) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const path = files[0].path // Get file path, the path is absolute path, electron can use directly
      console.log(path)
      pathFormat.setRootPath(path)
      console.log(pathFormat.getRootPath())
      ioPATH.setoutputpath(pathFormat.getRootPath())
    }
  })
  //阻止拖拽结束事件默认行为
  dragWrapper.addEventListener('dragover', (e) => {
    e.preventDefault()
  })
})

function handleUploadChange(data: { fileList: UploadFileInfo[] }): void {
  // console.log(data.fileList)
  // console.log(inputFileList.value)
  inputFileList.value = data.fileList
}

function handleBeforeUpload(options: { file: UploadFileInfo }): UploadFileInfo {
  // console.log(pathFormat.getNewPath(options.file.fullPath))
  ioPATH.add(options.file.id, pathFormat.getNewPath(options.file.fullPath))
  return options.file
}

function handleRemove(options: { file: UploadFileInfo; fileList: Array<UploadFileInfo> }): boolean {
  // console.log(ioPATH.show())
  // console.log(options.file.id)
  Final2xHomeNotifications.handleremove(ioPATH.getByID(options.file.id))
  ioPATH.delete(options.file.id)
  return true
}
</script>

<template>
  <div>
    <div id="file_drag" class="for_file_drag" @click.prevent>
      <n-upload
        v-model:file-list="inputFileList"
        multiple
        directory-dnd
        @remove="handleRemove"
        @before-upload="handleBeforeUpload"
        @change="handleUploadChange"
      >
        <n-upload-dragger class="file-drag-zone">
          <div class="filr-drag-zone-logo-text">
            <div style="margin-bottom: 12px">
              <n-icon size="48" :depth="3">
                <file-image-outlined />
              </n-icon>
            </div>
            <n-text style="font-size: 16px"> {{ t('Final2xHome.text1') }} </n-text>
          </div>
        </n-upload-dragger>
      </n-upload>
    </div>
  </div>
</template>

<style lang="scss">
.progress {
  width: 44%;
  position: absolute;
  top: 20px;
  left: 70px;
}

.for_file_drag {
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 65%;
  overflow-y: auto;

  .filr-drag-zone-logo-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
