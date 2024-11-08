<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { NConfigProvider, NDialogProvider, NNotificationProvider, NGlobalStyle } from 'naive-ui'
import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { getLanguage } from './utils'
import { useGlobalSettingsStore } from './store/globalSettingsStore'
import TrafficLightsButtons from './components/TrafficLightsButtons.vue'
import MyProgress from './components/MyProgress.vue'
import BottomNavigation from './components/bottomNavigation.vue'
import MyDarkMode from './components/MyDarkMode.vue'

const { locale } = useI18n()
const { langsNum, naiveTheme, globalcolor } = storeToRefs(useGlobalSettingsStore())

watch(langsNum, () => {
  // 切换语言
  locale.value = getLanguage(langsNum.value).lang
  console.log('locale: ', locale.value)
})

onMounted(async () => {
  if (langsNum.value !== 114514) {
    // 当语言不是跟随环境时，设置语言
    locale.value = getLanguage(langsNum.value).lang
  }
})

const themeOverrides = {
  Select: {
    peers: {
      InternalSelectMenu: {
        height: '200px'
      }
    }
  }
}
</script>

<template>
  <n-config-provider :theme="naiveTheme" :theme-overrides="themeOverrides">
    <n-global-style />
    <n-notification-provider class="n-config-provider" placement="top">
      <n-dialog-provider>
        <div class="background">
          <my-dark-mode />
          <traffic-lights-buttons />
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
  transition: all 300ms ease-in-out;
  //padding-top: 30px;
  display: flex;
  flex-direction: column;

  .view {
    overflow: scroll;
    flex: 1;
  }
}

.fade-enter-active {
  transition: opacity 0.6s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
