<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from './router'
import { darkTheme, NButton, NConfigProvider, NIcon, NNotificationProvider, NSpace } from 'naive-ui'
import { computed, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { HomeOutlined, SettingOutlined, TranslationOutlined } from '@vicons/antd'
import { MoonOutline, SunnyOutline } from '@vicons/ionicons5'
import { switchCSSStyle, switchTheme } from './utils/DarkModeColor'

import { switchLanguage } from './utils/switchLanguage'
import { useGlobalSettingsStore } from './store/globalSettingsStore'
import MyProgress from './components/MyProgress.vue'
import MyExternalLink from './components/MyExternalLink.vue'
import MySetting from "./components/MySetting.vue";

const { locale } = useI18n()
const { langsNum, SRgpuid, deviceList, DarkTheme, globalcolor } = storeToRefs(
  useGlobalSettingsStore()
)

const langs = ['en', 'zh', 'ja']

watch(langsNum, () => {
  locale.value = langs[langsNum.value]
  console.log('locale', locale.value)
})

onMounted(async () => {
  const langs = ['en', 'zh', 'ja']
  locale.value = langs[langsNum.value]
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const res: Array<string> = await window.electron.ipcRenderer.invoke('getSystemInfo')
  if (res.length == 1) {
    SRgpuid.value = -1 // CPU only
  } else {
    SRgpuid.value = 0 // GPU
  }

  for (const i in res) {
    const deviceType = i == 0 ? 'CPU: ' : 'GPU: '
    deviceList.value.push({ label: deviceType + String(res[i]), value: Number(i - 1) })
  }
  console.log(deviceList.value)
})

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

const themeOverrides = {
  Select: {
    peers: {
      InternalSelectMenu: {
        height: '130px'
      }
    }
  }
}
</script>

<template>
  <n-config-provider :theme="getTheme" :theme-overrides="themeOverrides">
    <n-notification-provider placement="top">
<!--      <div class="drag" />-->
      <div class="background">
        <MyProgress />
        <MyExternalLink />
<!--        <n-space class="main-buttons">-->
<!--          <n-button text style="font-size: 36px" @click="router.push('/Final2xSettings')">-->
<!--            <n-icon>-->
<!--              <setting-outlined />-->
<!--            </n-icon>-->
<!--          </n-button>-->

<!--          <n-button text style="font-size: 36px" @click="router.push('/')">-->
<!--            <n-icon>-->
<!--              <home-outlined />-->
<!--            </n-icon>-->
<!--          </n-button>-->

<!--          <n-button text style="font-size: 36px" @click="switchLanguage">-->
<!--            <n-icon>-->
<!--              <translation-outlined />-->
<!--            </n-icon>-->
<!--          </n-button>-->

<!--          <n-button text style="font-size: 36px" @click="switchTheme">-->
<!--            <n-icon>-->
<!--              <div v-if="getTheme === undefined">-->
<!--                <moon-outline />-->
<!--              </div>-->
<!--              <div v-else>-->
<!--                <sunny-outline />-->
<!--              </div>-->
<!--            </n-icon>-->
<!--          </n-button>-->
<!--        </n-space>-->
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>

      </div>
    </n-notification-provider>
    <n-global-style />
  </n-config-provider>
</template>

<style lang="scss">
$global-color: v-bind(globalcolor);
$buttom-bottom: 8px;

::-webkit-scrollbar {
  display: none;
}

.background {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: $global-color;
  z-index: -1;
}

.drag {
  width: 100%;
  height: 30px;
  position: fixed;
  background-color: $global-color;
  -webkit-app-region: drag;
}

.main-buttons {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: $buttom-bottom;
  left: 13px;
}

.fade-enter-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
