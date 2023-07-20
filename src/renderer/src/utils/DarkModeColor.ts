import { storeToRefs } from 'pinia'
import { useGlobalSettingsStore } from '../store/globalSettingsStore'
import { nextTick } from 'vue'

/**
 * @description Interpolate two colors by a given factor
 */
function interpolateColor(color1: string, color2: string, factor: number): string {
  if (factor === 0) return color1
  if (factor === 1) return color2

  const c1 = hexToRgb(color1)
  const c2 = hexToRgb(color2)

  const r = Math.round(interpolate(c1.r, c2.r, factor))
  const g = Math.round(interpolate(c1.g, c2.g, factor))
  const b = Math.round(interpolate(c1.b, c2.b, factor))

  return `rgb(${r}, ${g}, ${b})`
}

function interpolate(start: number, end: number, factor: number): number {
  return start + (end - start) * factor
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return { r, g, b }
}

/**
 * @description Smooth transition to dark mode
 */
function switchCSSStyle(theme: string): void {
  const { globalcolor } = storeToRefs(useGlobalSettingsStore())

  const targetColor = theme === 'dark-theme' ? '#000000' : '#fffafa'
  const initialColor = theme === 'dark-theme' ? '#fffafa' : '#000000'
  const layer = 20

  for (let i = 1; i <= layer; i++) {
    setTimeout(() => {
      nextTick(() => {
        globalcolor.value = interpolateColor(initialColor, targetColor, i / layer)
      })
    }, layer * i)
  }
}

/**
 * @description Switch the theme between light and dark
 */
function switchTheme(): void {
  const { DarkTheme } = storeToRefs(useGlobalSettingsStore())
  DarkTheme.value = !DarkTheme.value
}

export { switchCSSStyle, switchTheme }
