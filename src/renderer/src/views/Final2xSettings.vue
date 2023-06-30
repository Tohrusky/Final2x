<script lang="ts" setup>
//
// .........................................................................................
// .........................................................................................
// ..................................,]]/@@@@@@@@]]]]`......................................
// ..............................,@@@@@@@@@@@@@@@@@@@@@@@@@\`...............................
// .................... ......,/@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\.............................
// .........................,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`..........................
// ......................./@@@@@@@@O@@@@@@OO@OOoO@@@@@@@@@@@@@@@@@@`........................
// ...................../O@@@@@@OO@OOOOoOOOOOO@OOOOO@@OO@@@@@@@@@@@@@`.]`...................
// ...................,//@@@@@oOO@OOO\ooooooOOO@OOooOOO@@@@@@@@@OOOOO@@@O\..................
// ................../\@@@@@ooOO@OOoooooooo/oooOO@OoooO@@@@/O@@@OOOOoO@OOOO\................
// ................./=O@@@`ooooOOo/O\\oooooo\oooo\@OoooooO@@`\/@OOO\`*O\^=OO^...............
// ................@=@@@@.\ooO/O/o=\///ooo^=,^[,`\\/O\\oooO@/@@@OOOO\`\*./o@`...............
// ...............=^@@O@.^ooo\O\\*o=**\*`=***=^,/]=/OOoooooO^`\[O@@@O\\...,oOO].............
// ...............@=@O@.,=oo/O^/,*`=*****=***^\/^,`,`O^oooooO/,o\,@OOOo]`.,OOO^.............
// ...............@@@@..*o/\oO,*.,^o******^**=*@/^*,*^O^ooooooO@]=@OOOO\]OOoOO@^............
// ...............@@@...=o,.=^.**=^o***********=\/\****O,ooooooO^=@@OOOOO@O@OO@^............
// ...............@@^...,.*.=^***=^=***********=^,\\***=\,oooooO\=@@@@@@@@@@@@@^............
// ...............\@......**O^***=^=^*....*..*^=^..\O/**\``o=oooO@@@\@@@O@@@@@@^............
// ...............=^......^*\^***=^=^.....*..,^*.....\\*=^=`\`\ooO@\/@@@@O@@@@@@^...........
// .............../.....,***=^..*O^.O.....,..=^=...,]]]@]O*\*\*=*OO@@@@@@@@@@/..............
// .............../..^..o***=\.,\^=.^,....=..^.,.=/\@@@@@@@@`*\\,=OO@@@@@@@@@...............
// ..............=^,,^..o***=O.,O..^=``..,^.^......=@@`=@^@.O*`=O\O@@@@@@@@@................
// ..............=^==O..=`***O^O]@@@@@\.............[,`.O,O.=\**,oO@@@@@@@@@@...............
// ..............=.^O=*.=^**.OO@/=@@/\@`..................@^*O\**,^@@@@@@@@@@\..............
// ............../.\^=^`=\***=@@`.\Oo/[...................OO.=@\,,,@@@@@@@@@`...............
// ..............O.=^.^\*O***,@\,^........................^O^*\@O,,,OO@@@@@@^...............
// ..............O.O..O.OO^**.\O@........................=^=O`*OOO`\`O@@@@@@@^..............
// ..............O.O..\..@O`***O@@`........,]`...........=**OO`,O\O@\\\@@@@O@@`.............
// ..............=.O..=.`,@O***=@O@\........[OOOOO`.`..../^*=O@`,\`OOO@@@@@\@@O.............
// ..............,^O..=.O.O@\***@@@@@\..../OOO@O\oO/\O,/@^o**o@O\*O*\OOO@@@,O\`\............
// ...............\=..=.o^=OO@``,@@=OOO@OOOOOO\``.o./\O@@o=.*=O/OO\,\,O@@@@.\=@`............
// ................O^.=`/O*OO\O@],@=OOOOOOOO^@oo,..*[[\@@O=^**O^^\O@O/[@@@@.=/..............
// .................\`=^=O\=^OOO@O@=OOOOOOO@@@OooOO]],=O@O^^**O@=^/OOO@@@@@.................
// ..................,O.OOOOO\=@@@^@@@@@@@@@@@@OOOOO^/@O@O^o`^=@O=//O\=O@@@.................
// ................../.=^O@O`=O/@@\@@@@@@@@@@@@@\/@OoO@@@OO=^o=@@\\/\\@/\/@^................
// ................,/,^=oO//,/^...\O@@[.....=`.,`\@@OO@@^@@=o==@@@@\//O@@O@=`......... . ...
// ..............././\.o/o\@\/..[=`=^....[[@\]^...`@@@^\@=@=o\=@O@@\Oooo@@@o=^........... ..
// ............./`/`/.=o//^/[....`./......,@@@@^].`.,[\]@^=^ooO@@@@/@Oooo@`\o/\.............
// .........../\/../,,OO/@O]],.,/[=.......,@@@@@\....../@@/O=oo@@@@`,@@Oo\@.,O\O............
// \`......]O/`..,/,`o@@/`..`....=`......,\,@@@O@@`...=@@@@@O/Oo\/*=/@@@OoO^..\\\`..........
// OOOOO@@/`....,^=^o/OO...../@@/`....,]/@@O@@@@@@@\.=@@@@O@@/oOOoOO/,@@@@OO^..=O/^.........
// OO/`......../\@//oOO....@@@@@.....,@@@@@@@@@@@@@@@@@@@@@@@@\\/[O^,\@@O@@O@...O\/^........
// ...........O/@@=OO@..../@[.[\`..==@@@@@@@@@@@@@@@@@@@@@@@@@\\O//./O[O\OO@^`..=O\O@.......
// .........,@@@@\OO@@@@@@@`.....,\`=@@@@@@@@O.]/@@@@@@@@@O/=@@\o\[^OoO\O@OO@@`.=@@@@@......
// ........=@@@@OOO@@@@@@@=.........,\@@@@@@@@OO[\/[\OO`=O/OO@@@@OO/^.,^\@@@@@@.=@@@@@@`....
//
// 黑塔保佑，永无BUG
// Herta bless, no bug forever
// 崩坏：星穹铁道，启动！ https://sr.mihoyo.com/ 点击下载
// Honkai: Star Rail, START! https://sr.mihoyo.com/ Click to download
// 🔥 🗡 😠 枪尖已经点燃🔥 🔥 💥 炎枪—— 🤺🔥 ➡️ ➡️ ➡️ 💥 冲锋—— 🤺🔥 🔪 ↘️ 🌋
// 🤺让你尝尝👗 👇 ❄️ 本姑娘的厉害😬👌 🏹 ❄️ 嘿—— ♐ ♐ ♐ 🎆 ❄️ 🐰 ❄️ 🐰❄️ 🐰❄️ 🐰 ❄️ 🐰
// 我们已经踏入风雪💂🏻‍♀️💂🏻‍♀️💂🏻‍♀️💂🏻‍♀️💂🏻‍♀️💂🏻‍♀️💂🏻‍♀️💂🏻‍♀️❄️❄️❄️❄️❄️❄️❄️❄️为了守护和捍卫，击溃他们！🗡️🗡️⚔️
// 让开！😤😤😤漆黑的虎克大人驾到💃💃💃！！！😡😡😡嘟嘟嘟嘟👩‍🦽👩‍🦽👩‍🦽嘣！！！💥💥💥😄
// 👋试探就到此为止了❄️万剑⚔天来~🗡❄️🗡❄️🗡~
// 客人岂能不招待🦊咱们还是以和为贵💥嗯～额呵呵～🔔
// 🏃🏃🏃没见过这么大的钻石💎吧？🔄🔨💎送给你！💎💥👪
// 拜托让我摸个🐟吧，😣🤚🀄🤩🤚🀄这不就糊了🔪
// 🤺😠🍢生死虚实，一念之间。😑😐🌳🍃洞天幻化🍃🍃长梦一觉！👿破！🍃🍃😡🍢
// 见识一下星辰粉碎的样子吧！🦯🌑生存还是毁灭 ✂🌗你别无选择🤓🤔
// 😠我以朗道之名，历经风雪✊，筑成此志🏔️，永不终结👨‍👩‍👧‍👧
// 我想💺你可能还不明白🦵人类从不掩饰掌控星空的欲望🎆当然，也包括我在内☕👌🏻👩🏻
// 随蝴蝶🦋一起消散吧😠，旧世的幻影👾
// 离开克拉拉🤖🖐🏿帮帮我！史瓦罗先生😭
// 我以朗道之名😠，冰雪铸成此志🛡️🛡️，永不终结❄️❄️❄️！
// 这么大的钻石💎，送给你！
// 🌊就让你看看，这葫芦里卖的是什么药🌊⛄💦
// 生存还是毁灭，你别无选择👨🏻👓🖕🏻！🎆
// 规则😠就是用来打破的🏏✊😠
// -----------------------------------------------------------------------------------------

import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import {
  NButton,
  NCard,
  NInput,
  NInputNumber,
  NPopover,
  NSelect,
  NSpace,
  NSwitch,
  SelectOption
} from 'naive-ui'
import { useI18n } from 'vue-i18n'

import ioPath from '../utils/IOPath'
import {
  CPUmodelOptions,
  GetModelNoiseOptionsByNameAndScale,
  modelOptions,
  modelScaleOptions
} from '../utils/ModelOptions'
import { useIOPathStore } from '../store/ioPathStore'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
import { useSRSettingsStore } from '../store/SRSettingsStore'

const { SRgpuid, deviceList } = storeToRefs(useGlobalSettingsStore())
const { selectedModel, selectedScale, selectedNoise, useTTA, CustomScaleValue } = storeToRefs(
  useSRSettingsStore()
)
const { outputpath } = storeToRefs(useIOPathStore())
const { t } = useI18n()

class MyPopoverMessages {
  static Device(): string {
    return t('Final2xSettings.text0')
  }

  static Model(): string {
    if (selectedModel.value == 'RealCUGAN-pro' || selectedModel.value == 'RealCUGAN-se') {
      return t('Final2xSettings.text1')
    } else if (
      selectedModel.value == 'RealESRGAN-animevideov3' ||
      selectedModel.value == 'RealESRGAN' ||
      selectedModel.value == 'RealESRGAN-anime'
    ) {
      return t('Final2xSettings.text2')
    } else if (
      selectedModel.value == 'Waifu2x-cunet' ||
      selectedModel.value == 'Waifu2x-upconv_7_anime_style_art_rgb' ||
      selectedModel.value == 'Waifu2x-upconv_7_photo'
    ) {
      return t('Final2xSettings.text3')
    } else if (selectedModel.value == 'SRMD') {
      return t('Final2xSettings.text4')
    }
  }

  static ModelScale(): string {
    return t('Final2xSettings.text5')
  }

  static ModelDenoise(): string {
    return t('Final2xSettings.text6')
  }

  static TTA(): string {
    return t('Final2xSettings.text7')
  }

  static CustomScale(): string {
    return t('Final2xSettings.text8')
  }

  static OutputFolder(): string {
    return t('Final2xSettings.text9')
  }
}

function getPath(): void {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.electron.ipcRenderer.send('open-directory-dialog', 'openDirectory')
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.electron.ipcRenderer.on('selectedItem', function (e, path) {
    console.log(ioPath.getoutputpath())
    ioPath.setoutputpathManual(path)
  })
}

// -----------------------------------------------------------------------------------------
// Cascade selection, the order is: gpuid -> model -> scale -> noise
// -----------------------------------------------------------------------------------------

const getEnabledModelOptions = computed(() => {
  console.log('getEnabledModelOptions' + SRgpuid.value)
  // RealESRGAN-animevideov3、RealESRGAN、RealESRGAN-anime and SRMD are not supported on CPU
  return SRgpuid.value === -1 ? CPUmodelOptions : modelOptions
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ModelOptionsFallBack(value: string): SelectOption {
  selectedModel.value = 'RealCUGAN-pro'
  console.log('modelOptionsFallBack' + selectedModel.value)
  return {
    label: 'RealCUGAN-pro',
    value: 'RealCUGAN-pro'
  }
}

const getScaleOptions = computed(() => {
  console.log('getScaleOptions' + selectedModel.value)
  return modelScaleOptions[selectedModel.value]
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ScaleOptionsFallBack(value: number): SelectOption {
  const defaultScales: { [key: string]: number } = {
    'RealCUGAN-se': 2,
    'RealCUGAN-pro': 2,
    'RealESRGAN-animevideov3': 2,
    RealESRGAN: 4,
    'RealESRGAN-anime': 4,
    'Waifu2x-cunet': 2,
    'Waifu2x-upconv_7_anime_style_art_rgb': 2,
    'Waifu2x-upconv_7_photo': 2,
    SRMD: 2
  }
  selectedScale.value = defaultScales[selectedModel.value]
  console.log('ScaleOptionsFallBack' + defaultScales[selectedModel.value])
  return {
    label: defaultScales[selectedModel.value].toString(),
    value: defaultScales[selectedModel.value]
  }
}

const getNoiseOptions = computed(() => {
  console.log(
    'getNoiseOptions' +
      GetModelNoiseOptionsByNameAndScale(selectedModel.value, selectedScale.value).toString()
  )
  return GetModelNoiseOptionsByNameAndScale(selectedModel.value, selectedScale.value)
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function NoiseOptionsFallBack(value: number): SelectOption {
  console.log('NoiseOptionsFallBack')
  selectedNoise.value = 0
  return {
    label: '0',
    value: 0
  }
}

class ClickButtomToConsoleLog {
  static selectedModel(): void {
    console.log(selectedModel.value)
  }

  static selectedScale(): void {
    console.log(selectedScale.value)
  }

  static selectedNoise(): void {
    console.log(selectedNoise.value)
  }

  static useTTA(): void {
    console.log(useTTA.value)
  }

  static SRgpuid(): void {
    console.log(SRgpuid.value)
  }

  static CustomScale(): void {
    console.log(CustomScaleValue.value)
  }
}
</script>

<template>
  <n-card :bordered="false" class="settings-card">
    <n-space class="vertical" vertical justify="center">
      <n-space>
        <n-popover trigger="hover" width="400">
          <template #trigger>
            <n-button dashed type="success" @click="ClickButtomToConsoleLog.SRgpuid()">
              Device
            </n-button>
          </template>
          <span> {{ MyPopoverMessages.Device() }} </span>
        </n-popover>

        <n-select v-model:value="SRgpuid" :options="deviceList" style="width: 465px" />
      </n-space>
      <n-space>
        <n-popover trigger="hover" width="400">
          <template #trigger>
            <n-button dashed type="success" @click="ClickButtomToConsoleLog.selectedModel()">
              Model
            </n-button>
          </template>
          <span> {{ MyPopoverMessages.Model() }} </span>
        </n-popover>
        <n-select
          v-model:value="selectedModel"
          :fallback-option="ModelOptionsFallBack"
          :options="getEnabledModelOptions"
          style="width: 250px"
        />
        <n-popover trigger="hover">
          <template #trigger>
            <n-button dashed type="success" @click="ClickButtomToConsoleLog.selectedScale()">
              Model Scale
            </n-button>
          </template>
          <span> {{ MyPopoverMessages.ModelScale() }} </span>
        </n-popover>
        <n-select
          v-model:value="selectedScale"
          :fallback-option="ScaleOptionsFallBack"
          :options="getScaleOptions"
          style="width: 88px"
        />
      </n-space>
      <n-space>
        <n-popover trigger="hover" width="400">
          <template #trigger>
            <n-button dashed type="success" @click="ClickButtomToConsoleLog.selectedNoise()">
              Denoise
            </n-button>
          </template>
          <span> {{ MyPopoverMessages.ModelDenoise() }} </span>
        </n-popover>

        <n-select
          v-model:value="selectedNoise"
          :fallback-option="NoiseOptionsFallBack"
          :options="getNoiseOptions"
          style="width: 80px"
        />

        <n-popover trigger="hover" width="400">
          <template #trigger>
            <n-button dashed type="success" @click="ClickButtomToConsoleLog.useTTA()">
              TTA
            </n-button>
          </template>
          <span> {{ MyPopoverMessages.TTA() }} </span>
        </n-popover>

        <n-switch v-model:value="useTTA" size="large" style="height: 35px"></n-switch>

        <n-popover trigger="hover" width="400">
          <template #trigger>
            <n-button dashed type="success" @click="ClickButtomToConsoleLog.CustomScale()">
              Custom Scale
            </n-button>
          </template>
          <span> {{ MyPopoverMessages.CustomScale() }} </span>
        </n-popover>

        <n-input-number
          v-model:value="CustomScaleValue"
          :max="99999999"
          :min="0"
          :step="0.2"
          style="width: 110px"
        />
      </n-space>

      <n-space>
        <n-popover trigger="hover">
          <template #trigger>
            <n-button round type="success" @click="getPath"> Output Folder</n-button>
          </template>
          <span> {{ MyPopoverMessages.OutputFolder() }} </span>
        </n-popover>

        <n-input v-model:value="outputpath" :placeholder="outputpath" round style="width: 411px" />
      </n-space>
    </n-space>
  </n-card>
</template>

<style lang="scss" scoped>
.settings-card {
  width: fit-content;
  margin: 0 auto;
  height: 100%;
  // transparent
  background-color: rgba(255, 255, 255, 0);

  .vertical {
    height: 100%;
    > div {
      margin-bottom: 20px;
    }
  }
}
</style>
