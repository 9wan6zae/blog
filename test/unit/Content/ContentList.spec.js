import { mount } from '@vue/test-utils'
import ContentList from '@/components/ContentList.vue'
import Content from '@/components/Content.vue'

describe('ContentList.vue', () => {
  test('ContentList 렌더링', () => {
    const wrapper = mount(ContentList)

    expect(wrapper.find('[data-test="ContentList"]').exists()).toBeTruthy()
  })

  test('N개의 Content가 있을 때 N개를 렌더링하는지', () => {
    const arrSize = 4
    const contents = Array(arrSize).fill({
      id: 1,
      img: 'test',
      title: 'npm은 무엇일까',
      description: 'ttt',
      author: 'tester',
      like: 17,
    })
    const wrapper = mount(ContentList, {
      propsData: {
        contents,
      },
    })

    expect(wrapper.findAllComponents(Content)).toHaveLength(arrSize)
  })
})
