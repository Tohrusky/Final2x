<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { SelectOption } from 'naive-ui'
import { useI18n } from 'vue-i18n'

import ioPath from '../utils/IOPath'
import {
  GetModelNoiseOptionsByNameAndScale,
  modelOptions,
  modelScaleOptions
} from '../utils/ModelOptions'
import { useIOPathStore } from '../store/ioPathStore'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
import { useSRSettingsStore } from '../store/SRSettingsStore'

const { SRgpuid, deviceList } = storeToRefs(useGlobalSettingsStore())
const { selectedModel, selectedScale, selectedNoise, useTTA, CustomScaleValue } =
  storeToRefs(useSRSettingsStore())
const { outputpath } = storeToRefs(useIOPathStore())
const { t } = useI18n()

class MyPopoverMessages {
  static Device(): string {
    return t('Final2xSettings.text0')
  }

  static Model(): string {
    if (selectedModel.value == 'RealCUGAN-pro' || selectedModel.value == 'RealCUGAN-se') {
      return t('Final2xSettings.text1')
    } else if (selectedModel.value == 'APISR-RRDB') {
      return t('Final2xSettings.text18')
    } else if (
      selectedModel.value == 'RealESRGAN-animevideov3' ||
      selectedModel.value == 'RealESRGAN' ||
      selectedModel.value == 'RealESRGAN-anime'
    ) {
      return t('Final2xSettings.text2')
    } else if (
      selectedModel.value == 'Waifu2x-cunet' ||
      selectedModel.value == 'Waifu2x-upconv_7_anime_style_art_rgb' ||
      selectedModel.value == 'Waifu2x-upconv_7_photo'
    ) {
      return t('Final2xSettings.text3')
    }
    return ''
  }

  static ModelScale(): string {
    return t('Final2xSettings.text5')
  }

  static ModelDenoise(): string {
    return t('Final2xSettings.text6')
  }

  static TTA(): string {
    return t('Final2xSettings.text7')
  }

  static CustomScale(): string {
    return t('Final2xSettings.text8')
  }

  static OutputFolder(): string {
    return t('Final2xSettings.text9')
  }
}

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

// -----------------------------------------------------------------------------------------
// Cascade selection, the order is: gpuid -> model -> scale -> noise
// -----------------------------------------------------------------------------------------

const getEnabledModelOptions = computed(() => {
  console.log('getEnabledModelOptions' + SRgpuid.value)
  return modelOptions
})

function ModelOptionsFallBack(): SelectOption {
  selectedModel.value = 'RealCUGAN-pro'
  console.log('modelOptionsFallBack' + selectedModel.value)
  return {
    label: 'RealCUGAN-pro',
    value: 'RealCUGAN-pro'
  }
}

const getScaleOptions = computed(() => {
  console.log('getScaleOptions' + selectedModel.value)
  return modelScaleOptions[selectedModel.value]
})

function ScaleOptionsFallBack(): SelectOption {
  const defaultScales: { [key: string]: number } = {
    'RealCUGAN-se': 2,
    'RealCUGAN-pro': 2,
    'APISR-RRDB': 4,
    'RealESRGAN-animevideov3': 2,
    RealESRGAN: 4,
    'RealESRGAN-anime': 4,
    'Waifu2x-cunet': 2,
    'Waifu2x-upconv_7_anime_style_art_rgb': 2,
    'Waifu2x-upconv_7_photo': 2
  }
  selectedScale.value = defaultScales[selectedModel.value]
  console.log('ScaleOptionsFallBack' + defaultScales[selectedModel.value])
  return {
    label: defaultScales[selectedModel.value].toString(),
    value: defaultScales[selectedModel.value]
  }
}

const getNoiseOptions = computed(() => {
  console.log(
    'getNoiseOptions' +
      GetModelNoiseOptionsByNameAndScale(selectedModel.value, selectedScale.value).toString()
  )
  return GetModelNoiseOptionsByNameAndScale(selectedModel.value, selectedScale.value)
})

function NoiseOptionsFallBack(): SelectOption {
  console.log('NoiseOptionsFallBack')
  selectedNoise.value = 0
  return {
    label: '0',
    value: 0
  }
}

class ClickButtomToConsoleLog {
  static selectedModel(): void {
    console.log(selectedModel.value)
  }

  static selectedScale(): void {
    console.log(selectedScale.value)
  }

  static selectedNoise(): void {
    console.log(selectedNoise.value)
  }

  static useTTA(): void {
    console.log(useTTA.value)
  }

  static SRgpuid(): void {
    console.log(SRgpuid.value)
  }

  static CustomScale(): void {
    console.log(CustomScaleValue.value)
  }
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
              @click="ClickButtomToConsoleLog.SRgpuid()"
            >
              {{ t('Final2xSettings.text10') }}
            </n-button>
          </template>
          <span> {{ MyPopoverMessages.Device() }} </span>
        </n-popover>

        <n-select v-model:value="SRgpuid" :options="deviceList" style="width: 465px" />
      </n-space>
      <n-space>
        <n-popover trigger="hover" :width="400">
          <template #trigger>
            <n-button
              dashed
              type="success"
              style="width: 80px"
              @click="ClickButtomToConsoleLog.selectedModel()"
            >
              {{ t('Final2xSettings.text11') }}
            </n-button>
          </template>
          <span> {{ MyPopoverMessages.Model() }} </span>
        </n-popover>
        <n-select
          v-model:value="selectedModel"
          :fallback-option="ModelOptionsFallBack"
          :options="getEnabledModelOptions"
          style="width: 206px"
        />
        <n-popover trigger="hover">
          <template #trigger>
            <n-button
              dashed
              type="success"
              style="width: 120px"
              @click="ClickButtomToConsoleLog.selectedScale()"
            >
              {{ t('Final2xSettings.text12') }}
            </n-button>
          </template>
          <span> {{ MyPopoverMessages.ModelScale() }} </span>
        </n-popover>
        <n-select
          v-model:value="selectedScale"
          :fallback-option="ScaleOptionsFallBack"
          :options="getScaleOptions"
          style="width: 115px"
        />
      </n-space>
      <n-space>
        <n-popover trigger="hover">
          <template #trigger>
            <n-button
              dashed
              type="success"
              style="width: 80px"
              @click="ClickButtomToConsoleLog.selectedNoise()"
            >
              {{ t('Final2xSettings.text13') }}
            </n-button>
          </template>
          <span> {{ MyPopoverMessages.ModelDenoise() }} </span>
        </n-popover>

        <n-select
          v-model:value="selectedNoise"
          :fallback-option="NoiseOptionsFallBack"
          :options="getNoiseOptions"
          style="width: 80px"
        />

        <n-popover trigger="hover">
          <template #trigger>
            <n-button
              dashed
              type="success"
              style="width: 54px"
              @click="ClickButtomToConsoleLog.useTTA()"
            >
              {{ t('Final2xSettings.text14') }}
            </n-button>
          </template>
          <span> {{ MyPopoverMessages.TTA() }} </span>
        </n-popover>

        <n-switch v-model:value="useTTA" size="large" style="height: 35px"></n-switch>

        <n-popover trigger="hover" :width="200">
          <template #trigger>
            <n-button
              dashed
              type="success"
              style="width: 120px"
              @click="ClickButtomToConsoleLog.CustomScale()"
            >
              {{ t('Final2xSettings.text15') }}
            </n-button>
          </template>
          <span> {{ MyPopoverMessages.CustomScale() }} </span>
        </n-popover>

        <n-input-number
          v-model:value="CustomScaleValue"
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
            <n-button round type="success" style="width: 171px" @click="getPath">
              {{ t('Final2xSettings.text17') }}
            </n-button>
          </template>
          <span> {{ MyPopoverMessages.OutputFolder() }} </span>
        </n-popover>

        <n-input v-model:value="outputpath" :placeholder="outputpath" round style="width: 374px" />
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
