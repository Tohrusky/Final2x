<script lang="ts" setup>
import { clickDebounce } from '../utils'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
import { switchLanguage } from '../utils/switchLanguage'
import router from '../router'
import { storeToRefs } from 'pinia'
import { HomeOutlined, SettingOutlined, TranslationOutlined } from '@vicons/antd'
import { MoonOutline, SunnyOutline, ContrastSharp } from '@vicons/ionicons5'

const { darkMode, changeRoute } = storeToRefs(useGlobalSettingsStore())

function handleRoute(): void {
  if (changeRoute.value === false) {
    changeRoute.value = true
    router.push('/Final2xSettings')
  } else {
    changeRoute.value = false
    router.push('/')
  }
}

const handleDarkMode = clickDebounce(function changeDarkMode(): void {
  // const darkmodeList : Array<NaiveDarkModeType> = ['system', 'light', 'dark']
  if (darkMode.value === 'system') {
    darkMode.value = 'light'
  } else if (darkMode.value === 'light') {
    darkMode.value = 'dark'
  } else {
    darkMode.value = 'system'
  }
})
</script>

<template>
  <div>
    <n-space class="main-buttons">
      <n-button style="font-size: 36px" text @click="handleRoute">
        <n-icon>
          <div v-if="changeRoute === false">
            <setting-outlined />
          </div>
          <div v-else>
            <home-outlined />
          </div>
        </n-icon>
      </n-button>

      <n-button style="font-size: 36px" text @click="switchLanguage">
        <n-icon>
          <translation-outlined />
        </n-icon>
      </n-button>

      <n-button style="font-size: 36px" text @click="handleDarkMode">
        <n-icon>
          <div v-if="darkMode === 'light'">
            <sunny-outline />
          </div>
          <div v-else-if="darkMode === 'dark'">
            <moon-outline />
          </div>
          <div v-else>
            <contrast-sharp />
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
