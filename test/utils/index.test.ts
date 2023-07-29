/**
 * @vitest-environment jsdom
 */

import { sleep, DeepDeepSleep, getCurrentLocale, getRandString } from '../../src/renderer/src/utils'
import { describe, expect, it } from 'vitest'

describe('Utils', () => {
  it('getCurrentLocale', () => {
    expect(getCurrentLocale())
  })

  it('sleep', async () => {
    const start = new Date().getTime()
    await sleep(1000)
    const end = new Date().getTime()
    expect(end - start).toBeGreaterThanOrEqual(1000)
  })

  it('DeepDeepSleep', () => {
    const start = new Date().getTime()
    DeepDeepSleep(1000)
    const end = new Date().getTime()
    expect(end - start).toBeGreaterThanOrEqual(1000)
  })

  it('getRandString', () => {
    expect(getRandString())
  })
})
