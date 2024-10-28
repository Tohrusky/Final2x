<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { BookOutline, FilmOutline } from '@vicons/ionicons5'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
const { langsNum } = storeToRefs(useGlobalSettingsStore())

class openWebsite {
  static async Docs(): Promise<void> {
    const docsLink = 'https://final2x.tohru.top'
    const docsLinkCN = 'https://final2x.tohru.top/zh'

    if (langsNum.value === 1) {
      window.open(docsLinkCN, '_blank')
    } else {
      window.open(docsLink, '_blank')
    }
  }

  static async FinalRip(): Promise<void> {
    const Link = 'https://github.com/TensoRaws/FinalRip'

    window.open(Link, '_blank')
  }
}
</script>

<template>
  <div class="MyExternalLink">
    <n-space>
      <n-button style="font-size: 36px" text @click="openWebsite.Docs">
        <n-icon>
          <book-outline />
        </n-icon>
      </n-button>

      <n-button style="font-size: 36px" text @click="openWebsite.FinalRip">
        <n-icon>
          <film-outline />
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
