<script setup lang="ts">
import { RouterView } from 'vue-router'
import { darkTheme, NConfigProvider, NNotificationProvider, NSpace } from 'naive-ui'
import { computed, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { switchCSSStyle } from './utils/DarkModeColor'
import { useGlobalSettingsStore } from './store/globalSettingsStore'
import MyProgress from './components/MyProgress.vue'
import BottomNavigation from './components/bottomNavigation.vue'

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
    console.log('CPU only, SRgpuid = -1')
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
    <n-notification-provider placement="top" class="n-config-provider">
      <n-space justify="space-between" vertical class="background">
        <MyProgress />
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
        <bottom-navigation />
      </n-space>
    </n-notification-provider>
    <n-global-style />
  </n-config-provider>
</template>

<style lang="scss" scoped>
$global-color: v-bind(globalcolor);
$buttom-bottom: 8px;

::-webkit-scrollbar {
  display: none;
}

.n-config-provider {
  width: 100vw;
  height: 100vh;
}

.background {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: $global-color;
}

.drag {
  width: 100%;
  height: 30px;
  position: fixed;
  background-color: $global-color;
  -webkit-app-region: drag;
}

.fade-enter-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
