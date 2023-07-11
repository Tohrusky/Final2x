/**
 * @vitest-environment jsdom
 */

import { getFinal2xconfig } from '../../src/renderer/src/utils/getFinal2xconfig'
import ioPath from '../../src/renderer/src/utils/IOPath'
import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

describe('getFinal2xconfig', () => {
  beforeEach(() => {
    // 创建一个新 pinia，并使其处于激活状态
    setActivePinia(createPinia())
  })

  it('test_getFinal2xconfig', () => {
    expect(getFinal2xconfig()).toEqual(
      '{"gpuid":0,"inputpath":[],"model":"RealESRGAN","modelscale":2,"modelnoise":-1,"outputpath":"","targetscale":0,"tta":false}'
    )
    ioPath.setoutputpath('/test')
    expect(getFinal2xconfig()).toEqual(
      '{"gpuid":0,"inputpath":[],"model":"RealESRGAN","modelscale":2,"modelnoise":-1,"outputpath":"/test","targetscale":0,"tta":false}'
    )
    ioPath.add('114514', '/test1')
    expect(getFinal2xconfig()).toEqual(
      '{"gpuid":0,"inputpath":["/test1"],"model":"RealESRGAN","modelscale":2,"modelnoise":-1,"outputpath":"/test","targetscale":0,"tta":false}'
    )
    ioPath.add('1919810', '/test2')
    expect(getFinal2xconfig()).toEqual(
      '{"gpuid":0,"inputpath":["/test1","/test2"],"model":"RealESRGAN","modelscale":2,"modelnoise":-1,"outputpath":"/test","targetscale":0,"tta":false}'
    )
  })
})
