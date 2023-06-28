<script lang="ts" setup>
import { computed } from 'vue'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
import { switchCSSStyle, switchTheme } from '../utils/DarkModeColor'
import { darkTheme, NButton, NIcon, NSpace } from 'naive-ui'
import { switchLanguage } from '../utils/switchLanguage'
import router from '../router'
import { storeToRefs } from 'pinia'
import { HomeOutlined, SettingOutlined, TranslationOutlined } from '@vicons/antd'
import { MoonOutline, SunnyOutline } from '@vicons/ionicons5'

const { DarkTheme, globalcolor } = storeToRefs(useGlobalSettingsStore())

const getTheme = computed(() => {
  if (DarkTheme.value) {
    if (globalcolor.value === '#fffafa') {
      switchCSSStyle('dark-theme')
    }
    return darkTheme
  } else {
    if (globalcolor.value === '#000000') {
      switchCSSStyle('light-theme')
    }
    return undefined
  }
})
</script>

<template>
  <div>
    <n-space class="main-buttons">
      <n-button style="font-size: 36px" text @click="router.push('/Final2xSettings')">
        <n-icon>
          <setting-outlined />
        </n-icon>
      </n-button>

      <n-button style="font-size: 36px" text @click="router.push('/')">
        <n-icon>
          <home-outlined />
        </n-icon>
      </n-button>

      <n-button style="font-size: 36px" text @click="switchLanguage">
        <n-icon>
          <translation-outlined />
        </n-icon>
      </n-button>

      <n-button style="font-size: 36px" text @click="switchTheme">
        <n-icon>
          <div v-if="getTheme === undefined">
            <moon-outline />
          </div>
          <div v-else>
            <sunny-outline />
          </div>
        </n-icon>
      </n-button>
    </n-space>
  </div>
</template>

<style lang="scss" scoped>
$buttom-bottom: 8px;
.main-buttons {
  width: 180px;
}
</style>
