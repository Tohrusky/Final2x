<script setup lang="ts">
import { NDivider, NSpace } from 'naive-ui'
import MyExternalLink from './MyExternalLink.vue'
import MySetting from './MySetting.vue'
</script>

<template>
  <div class="position">
    <div class="divider">
      <n-divider />
    </div>
    <n-space justify="space-between" class="n-space">
      <MySetting />
      <MyExternalLink />
    </n-space>
  </div>
</template>

<style scoped lang="scss">
.position {
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  justify-content: flex-end;
}
.n-space{
  box-sizing: border-box;
  margin: 10px 20px 0 20px;
}
.divider {
  width: 100%;
  height: 1px;
}
</style>
