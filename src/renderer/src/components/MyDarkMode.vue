<script lang="ts" setup>
import { NaiveDarkMode } from 'naive-dark-mode'
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
      :design-dark="'#1a1919'"
      :design-light="'#fffafa'"
      :fade-layer="25"
      class="naive-dark-mode"
    />
  </div>
</template>

<style lang="scss" scoped></style>
