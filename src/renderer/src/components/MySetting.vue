<script lang="ts" setup>
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
import { switchTheme } from '../utils/DarkModeColor'
import { switchLanguage } from '../utils/switchLanguage'
import router from '../router'
import { storeToRefs } from 'pinia'
import { HomeOutlined, SettingOutlined, TranslationOutlined } from '@vicons/antd'
import { MoonOutline, SunnyOutline } from '@vicons/ionicons5'

const { DarkTheme, changeRoute } = storeToRefs(useGlobalSettingsStore())

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

      <n-button style="font-size: 36px" text @click="switchTheme">
        <n-icon>
          <div v-if="!DarkTheme">
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
