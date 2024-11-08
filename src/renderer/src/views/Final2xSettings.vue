<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { SelectOption } from 'naive-ui'
import { useI18n } from 'vue-i18n'

import ioPath from '../utils/IOPath'
import {
  modelOptions,
} from '../utils/ModelOptions'
import { useIOPathStore } from '../store/ioPathStore'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
import { useSRSettingsStore } from '../store/SRSettingsStore'

const { SRdevice, deviceList, openOutputFolder } = storeToRefs(useGlobalSettingsStore())
const { selectedModel, ghProxy, targetScale } =
  storeToRefs(useSRSettingsStore())
const { outputpath } = storeToRefs(useIOPathStore())
const { t } = useI18n()

function getPath(): void {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleSelected = (e, path): void => {
    if (path[0] != undefined) {
      // console.log(ioPath.getoutputpath())
      ioPath.setoutputpathManual(path[0])
    }
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.electron.ipcRenderer.removeAllListeners('selectedItem') // 取消监听，防止多次触发
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.electron.ipcRenderer.send('open-directory-dialog', ['openDirectory'])
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.electron.ipcRenderer.on('selectedItem', handleSelected)
}
</script>

<template>
  <n-card :bordered="false" class="settings-card">
    <n-space class="vertical" vertical justify="center">
      <n-space>
        <n-popover trigger="hover" :width="400">
          <template #trigger>
            <n-button
              dashed
              type="success"
              style="width: 80px"
            >
              {{ t('Final2xSettings.text10') }}
            </n-button>
          </template>
        </n-popover>

        <n-select v-model:value="SRdevice" :options="deviceList" style="width: 465px" />
      </n-space>
      <n-space>
        <n-popover trigger="hover" :width="400">
          <template #trigger>
            <n-button
              dashed
              type="success"
              style="width: 80px"
            >
              {{ t('Final2xSettings.text11') }}
            </n-button>
          </template>
        </n-popover>
        <n-select
          v-model:value="selectedModel"
          :options="modelOptions"
          style="width: 206px"
        />
        <n-popover trigger="hover" :width="200">
          <template #trigger>
            <n-button
              dashed
              type="success"
              style="width: 120px"
            >
              {{ t('Final2xSettings.text15') }}
            </n-button>
          </template>
        </n-popover>

        <n-input-number
          v-model:value="targetScale"
          :max="99999999"
          :min="0"
          :step="0.2"
          :placeholder="t('Final2xSettings.text16')"
          style="width: 115px"
        />
      </n-space>

      <n-space>
        <n-popover trigger="hover">
          <template #trigger>
            <n-button round type="success" style="height: 35px; width: 150px" @click="getPath">
              {{ t('Final2xSettings.text17') }}
            </n-button>
          </template>
        </n-popover>

        <n-switch v-model:value="openOutputFolder" size="large" style="height: 35px; width: 76px">
          <template #checked> OPEN </template>
        </n-switch>

        <n-input v-model:value="outputpath" :placeholder="outputpath" round style="width: 308px" />
      </n-space>
    </n-space>
  </n-card>
</template>

<style lang="scss" scoped>
.settings-card {
  width: fit-content;
  margin: 0 auto;
  height: 100%;
  // transparent
  background-color: rgba(255, 255, 255, 0);

  .vertical {
    height: 100%;

    > div {
      margin-bottom: 20px;
    }
  }
}
</style>
