import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import {
  // create naive ui
  create,
  // component
  NButton,
  NDivider,
  NSpace,
  NIcon,
  NImage,
  NCard,
  NDrawer,
  NDrawerContent,
  NLog,
  NProgress,
  NText,
  NUpload,
  NUploadDragger,
  NInput,
  NInputNumber,
  NPopover,
  NSelect,
  NSwitch
} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NDivider,
    NSpace,
    NIcon,
    NImage,
    NCard,
    NDrawer,
    NDrawerContent,
    NLog,
    NProgress,
    NText,
    NUpload,
    NUploadDragger,
    NInput,
    NInputNumber,
    NPopover,
    NSelect,
    NSwitch
  ]
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(naive).use(i18n).use(pinia).use(router).mount('#app')
