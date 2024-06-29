<script lang="ts" setup>
import NaiveDarkMode from './NaiveDarkMode.vue'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
import { storeToRefs } from 'pinia'

const { darkMode, globalcolor, naiveTheme } = storeToRefs(useGlobalSettingsStore())
</script>

<template>
  <div>
    <naive-dark-mode
      v-model:color="globalcolor"
      v-model:naivetheme="naiveTheme"
      :dark-mode="darkMode"
      :design-dark="'#101015'"
      :design-light="'#fffafa'"
      :fade-layer="0"
      class="naive-dark-mode"
    />
  </div>
</template>

<style lang="scss" scoped></style>
