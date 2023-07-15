<script lang="ts" setup>
// import useClipboard from 'vue-clipboard3'
// import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { NButton, NIcon, NImage, NSpace } from 'naive-ui'
import { PaperPlaneSharp, BookOutline } from '@vicons/ionicons5'
import { MoneyCollectOutlined } from '@vicons/antd'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
// import final2xlogo from '../assets/final2xlogo.png'
// import final2xlogoDarkMode from '../assets/final2xlogoDarkMode.png'

// const { t } = useI18n()
// const { toClipboard } = useClipboard()
// const notification = useNotification()
const { langsNum } = storeToRefs(useGlobalSettingsStore())

class openWebsite {
  static async Docs(): Promise<void> {
    const docsLink = 'https://final2x.tohru.top'
    const docsLinkCN = 'https://final2x.tohru.top/zh'

    if (langsNum.value === 1) {
      await window.open(docsLinkCN, '_blank')
    } else {
      await window.open(docsLink, '_blank')
    }
  }

  static async TelegramGroup(): Promise<void> {
    const telegramLink = 'https://t.me/+hQMtDxG9bqNiNjRh'
    await window.open(telegramLink, '_blank')
  }

  static async Afdian(): Promise<void> {
    const afdianLink = 'https://afdian.net/a/tohrusky'
    await window.open(afdianLink, '_blank')
  }
}
</script>

<template>
  <div class="MyExternalLink">
    <n-space>
      <n-button style="font-size: 36px" text @click="openWebsite.Afdian">
        <n-icon>
          <money-collect-outlined />
        </n-icon>
      </n-button>

      <n-button style="font-size: 36px" text @click="openWebsite.TelegramGroup">
        <n-icon>
          <paper-plane-sharp />
        </n-icon>
      </n-button>

      <n-button style="font-size: 36px" text @click="openWebsite.Docs">
        <n-icon>
          <book-outline />
        </n-icon>
      </n-button>
    </n-space>
  </div>
</template>

<style lang="scss" scoped>
.custom-fade-enter-active {
  transition: all 2s ease-out;
}

.custom-fade-leave-active {
  transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}

.custom-fade-enter-from,
.custom-fade-leave-to {
  opacity: 0;
}
.final2x-logo {
}

.MyExternalLink {
}
</style>
