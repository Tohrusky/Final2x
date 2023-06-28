<script lang="ts" setup>
import { nextTick, onMounted, ref, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import {
  NButton,
  NCard,
  NDivider,
  NDrawer,
  NDrawerContent,
  NLog,
  NProgress,
  useNotification
} from 'naive-ui'
import { useI18n } from 'vue-i18n'

import { getFinal2xconfig } from '../utils/getFinal2xconfig'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
import ioPATH from '../utils/IOPath'

const { t } = useI18n()
const notification = useNotification()
const { CommandLOG, logInstRef, StartCommandLock, ProgressPercentage } = storeToRefs(
  useGlobalSettingsStore()
)

const showLOG = ref(false)

onMounted(() => {
  watchEffect(() => {
    if (CommandLOG.value) {
      nextTick(() => {
        logInstRef.value?.scrollTo({ position: 'bottom', slient: true })
      })
    }
  })
})

function handleCommandLOG(log: string): void {
  CommandLOG.value += log

  const skipImageRegex = /______Skip_Image______:(.+)/
  const processingRegex = /Processing------\[ ([\d.]+)% /

  const skipImageMatch = log.match(skipImageRegex)
  const processingMatch = log.match(processingRegex)

  if (skipImageMatch) {
    const imagePath = skipImageMatch[1]
    MyProgressNotifications.SkipImage(imagePath)
  }

  if (processingMatch) {
    ProgressPercentage.value = parseFloat(processingMatch[1])
  }
}

class MyProgressNotifications {
  static StartSR(): void {
    notification.success({
      title: t('MyProgress.text0'),
      duration: 1500
    })
  }

  static SRprocessing(): void {
    notification.warning({
      title: t('MyProgress.text1'),
      duration: 1500
    })
  }

  static SRListEmpty(): void {
    notification.warning({
      title: t('MyProgress.text2'),
      content: t('MyProgress.text3'),
      duration: 1500,
      keepAliveOnHover: true
    })
  }

  static TerminateSR(): void {
    notification.error({
      title: t('MyProgress.text4'),
      duration: 1500,
      keepAliveOnHover: true
    })
  }

  static SkipImage(imagePath: string): void {
    notification.warning({
      title: t('MyProgress.text5'),
      content: imagePath,
      duration: 2000,
      keepAliveOnHover: true
    })
  }
}

function StartSR(): void {
  if (StartCommandLock.value) {
    MyProgressNotifications.SRprocessing()
    return
  }

  if (ioPATH.isEmpty()) {
    MyProgressNotifications.SRListEmpty()
    return
  }

  StartCommandLock.value = true // START LOCK

  MyProgressNotifications.StartSR()

  const command = getFinal2xconfig()
  CommandLOG.value += command + '\n'
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.electron.ipcRenderer.send('execute-command', command)
}

function TerminateSR(): void {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.electron.ipcRenderer.send('kill-command')
  MyProgressNotifications.TerminateSR()
}

watchEffect(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.electron.ipcRenderer.on('command-stdout', (event, data) => {
    handleCommandLOG(data)
  })
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.electron.ipcRenderer.on('command-stderr', (event, data) => {
    handleCommandLOG(data)
  })
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.electron.ipcRenderer.on('command-close-code', (event, data) => {
    handleCommandLOG('CLOSE CODE:' + data)
    StartCommandLock.value = false
    ioPATH.clearALL()
  })
})
</script>

<template>
  <div>
    <div class="control">
      <n-progress
        :percentage="ProgressPercentage"
        color="green"
        height="34px"
        indicator-placement="inside"
        processing
        type="line"
      />
      <n-button round secondary strong type="success" @click="StartSR">
        {{ t('MyProgress.text6') }}
      </n-button>

      <n-button round secondary strong type="error" @click="TerminateSR">
        {{ t('MyProgress.text7') }}
      </n-button>

      <n-button round secondary strong type="warning" @click="showLOG = !showLOG">
        {{ t('MyProgress.text8') }}
      </n-button>
    </div>

    <n-drawer v-model:show="showLOG" height="385" placement="top">
      <n-drawer-content :native-scrollbar="false" title="">
        <br />
        <n-card hoverable size="small" title="Log">
          <n-log ref="logInstRef" :log="CommandLOG" trim />
        </n-card>
      </n-drawer-content>
    </n-drawer>

    <n-divider class="n-divider" />
  </div>
</template>

<style lang="scss">
.control {
  box-sizing: border-box;
  width: 100%;
  padding: 12px 40px 0 40px;
  display: flex;
  justify-content: space-between;

  > div {
    margin: 0 5px;
  }

  > button {
    margin: 0 5px;
  }
}

.progress {
  margin-left: -30px;
  margin-top: 10px;
}

.ButtonSpace {
  margin-right: 40px;
  margin-top: 30px;
}

.n-divider {
  margin: 30px 0 0 0 !important;
}
</style>
