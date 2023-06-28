<template>
  <n-space class="main-buttons">
    <n-button text style="font-size: 36px" @click="router.push('/Final2xSettings')">
      <n-icon>
        <setting-outlined />
      </n-icon>
    </n-button>

    <n-button text style="font-size: 36px" @click="router.push('/')">
      <n-icon>
        <home-outlined />
      </n-icon>
    </n-button>

    <n-button text style="font-size: 36px" @click="switchLanguage">
      <n-icon>
        <translation-outlined />
      </n-icon>
    </n-button>

    <n-button text style="font-size: 36px" @click="switchTheme">
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
</template>

<script setup>

import { computed } from 'vue'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
import { switchCSSStyle, switchTheme } from "../utils/DarkModeColor";
import { darkTheme, NButton, NConfigProvider, NIcon, NNotificationProvider, NSpace } from 'naive-ui'
import { switchLanguage } from "../utils/switchLanguage";
import router from "../router";
import { storeToRefs } from 'pinia'
const { langsNum, SRgpuid, deviceList, DarkTheme, globalcolor } = storeToRefs(
  useGlobalSettingsStore()
)
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

<style lang="scss">
$buttom-bottom: 8px;
.main-buttons {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: $buttom-bottom;
  left: 13px;
}
</style>
