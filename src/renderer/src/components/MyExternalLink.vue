<script lang="ts" setup>
import useClipboard from 'vue-clipboard3'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { NButton, NIcon, NImage, NSpace, useNotification } from 'naive-ui'
import { QqCircleFilled } from '@vicons/antd'
import { PaperPlaneSharp } from '@vicons/ionicons5'
import final2xlogo from '../assets/final2xlogo.png'
import final2xlogoDarkMode from '../assets/final2xlogoDarkMode.png'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'

const { t } = useI18n()
const { toClipboard } = useClipboard()
const notification = useNotification()
const { DarkTheme } = storeToRefs(useGlobalSettingsStore())

class openWebsite {
  static async GitHub(): Promise<void> {
    const githubLink = 'https://github.com/Tohrusky/Final2x'
    await window.open(githubLink, '_blank')
  }

  static async TelegramGroup(): Promise<void> {
    const telegramLink = 'https://t.me/+hQMtDxG9bqNiNjRh'
    await window.open(telegramLink, '_blank')
  }
}

async function copyQQGroup(): Promise<void> {
  const qqGroupNum = '711185279'

  try {
    await toClipboard(qqGroupNum)
    console.log('Copied to clipboard')
    notification.success({
      title: t('MyExternalLink.text0') + qqGroupNum,
      content: t('MyExternalLink.text1'),
      duration: 1500,
      keepAliveOnHover: true
    })
  } catch (e) {
    console.error(e)
    notification.error({
      content: t('MyExternalLink.text2'),
      duration: 1500,
      keepAliveOnHover: true
    })
  }
}
</script>

<template>
  <div class="MyExternalLink">
    <n-space>
      <n-image
        :src="DarkTheme ? final2xlogoDarkMode : final2xlogo"
        height="36"
        preview-disabled
        width="36"
        @click="openWebsite.GitHub"
      />
      <n-button style="font-size: 36px" text @click="openWebsite.TelegramGroup">
        <n-icon>
          <paper-plane-sharp />
        </n-icon>
      </n-button>

      <n-button style="font-size: 36px" text @click="copyQQGroup">
        <n-icon>
          <qq-circle-filled />
        </n-icon>
      </n-button>
    </n-space>
  </div>
</template>

<style lang="scss" scoped>
.final2x-logo {
}

.MyExternalLink {
}
</style>
