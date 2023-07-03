/**
 * @vitest-environment jsdom
 */

import ioPath from '../../src/renderer/src/utils/IOPath'
import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

describe('IOPath', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('test_ioPath', () => {
    // test inputpath
    ioPath.add('114514', 'test')
    expect(ioPath.getByID('114514')).toBe('test')
    ioPath.add('114514', 'test2')
    expect(ioPath.getByID('114514')).toBe('test2')

    expect(ioPath.getList()).toEqual(['test2'])

    expect(ioPath.getAllPath()).toEqual('114514 : test2\n')
    expect(ioPath.show()).toEqual('test2\n')

    ioPath.delete('114514')
    expect(ioPath.getByID('114514')).toBe('')

    expect(ioPath.isEmpty()).toBe(true)

    // test outputpath
    ioPath.setoutputpath('/test')
    expect(ioPath.getoutputpath()).toBe('/test')
    ioPath.setoutputpathManual('/test2')
    expect(ioPath.getoutputpath()).toBe('/test2')
    ioPath.setoutputpath('')
    expect(ioPath.getoutputpath()).toBe('/test2')

    // clear ALL
    ioPath.add('114514', 'test')
    ioPath.clearALL()
    expect(ioPath.getList()).toEqual([])
    expect(ioPath.isEmpty()).toBe(true)
    expect(ioPath.getoutputpath()).toBe('/test2')
  })
})
