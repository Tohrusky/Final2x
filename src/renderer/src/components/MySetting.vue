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

const { DarkTheme, globalcolor, changeRoute } = storeToRefs(useGlobalSettingsStore())

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

function handleRoute(): void {
  if (changeRoute.value === false) {
    changeRoute.value = true
    router.push('/Final2xSettings')
  } else {
    changeRoute.value = false
    router.push('/')
  }
}
</script>

<template>
  <div>
    <n-space class="main-buttons">
      <div v-if="changeRoute === false">
        <n-button style="font-size: 36px" text @click="handleRoute">
          <n-icon>
            <setting-outlined />
          </n-icon>
        </n-button>
      </div>
      <div v-else>
        <n-button style="font-size: 36px" text @click="handleRoute">
          <n-icon>
            <home-outlined />
          </n-icon>
        </n-button>
      </div>

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
