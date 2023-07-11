<script lang="ts" setup>
import { RouterView } from 'vue-router'
import {
  darkTheme,
  NConfigProvider,
  NDialogProvider,
  NNotificationProvider,
  NGlobalStyle
} from 'naive-ui'
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
  if (res.length === 1) {
    SRgpuid.value = -1 // CPU only
    console.log('CPU only, SRgpuid = -1, try push GPU 0 and CPU 1')
    deviceList.value.push({ label: 'CPU: ' + String(res[0]), value: -1 })
    deviceList.value.push({ label: '[Maybe Unavailable] GPU 0', value: 0 })
    deviceList.value.push({ label: '[Maybe Unavailable] GPU 1', value: 1 })
  } else {
    // 正常情况
    for (const i in res) {
      const deviceType = i == 0 ? 'CPU: ' : 'GPU ' + String(i - 1) + ': '
      deviceList.value.push({ label: deviceType + String(res[i]), value: Number(i - 1) })
    }
    deviceList.value.push({ label: 'GPU: Auto', value: 114514 })
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
    <n-notification-provider class="n-config-provider" placement="top">
      <n-dialog-provider>
        <!--        <div class="drag" />-->
        <div class="background">
          <MyProgress />
          <div class="view">
            <router-view v-slot="{ Component }">
              <transition mode="out-in" name="custom-fade">
                <keep-alive>
                  <component :is="Component" />
                </keep-alive>
              </transition>
            </router-view>
          </div>
          <bottom-navigation />
        </div>
      </n-dialog-provider>
    </n-notification-provider>
    <n-global-style />
  </n-config-provider>
</template>

<style lang="scss" scoped>
.custom-fade-enter-active {
  transition: all 0.2s ease-out;
}

.custom-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.custom-fade-enter-from,
.custom-fade-leave-to {
  opacity: 0;
}

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
  //padding-top: 30px;
  display: flex;
  flex-direction: column;

  .view {
    overflow: scroll;
    flex: 1;
  }
}

//.drag {
//  width: 100%;
//  height: 30px;
//  position: fixed;
//  background-color: $global-color;
//  -webkit-app-region: drag;
//}

.fade-enter-active {
  transition: opacity 0.6s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
