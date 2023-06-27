import { storeToRefs } from 'pinia'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'

export function switchLanguage(): void {
  const { langsNum } = storeToRefs(useGlobalSettingsStore())
  const langs = ['en', 'zh', 'ja']
  langsNum.value = (langsNum.value + 1) % langs.length
  console.log(langs[langsNum.value])
}
