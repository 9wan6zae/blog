import { mount } from '@vue/test-utils'
import Post from '@/components/blog/Post.vue'

describe('Post.vue', () => {
  test('컴포넌트 렌더링', () => {
    const wrapper = mount(Post);

    expect(wrapper.find('.post-wrapper').exists()).toBeTruthy();
  })

  test('필요한 요소를 렌더링하는지', () => {
    const wrapper = mount(Post)

    expect(wrapper.find('.title').exists()).toBeTruthy()
    expect(wrapper.find('.description').exists()).toBeTruthy()
    expect(wrapper.find('.category').exists()).toBeTruthy()
    expect(wrapper.find('.createdAt').exists()).toBeTruthy()
    expect(wrapper.find('.thumbnail').exists()).toBeTruthy()
  })

  test('props로 전달받은 값을 보여주는지', () => {
    const propsData = {
      title: 'tester',
      description: 'testtest',
      thumbnail: 'testimg',
      category: 'test',
      createdAt: '2022-02-02'
    }
    const wrapper = mount(Post, {
      propsData
    })

    expect(wrapper.find('.title').text()).toBe(propsData.title)
    expect(wrapper.find('.description').text()).toBe(propsData.description)
    expect(wrapper.find('.category').text()).toBe(propsData.category)
    expect(wrapper.find('.createdAt').text()).toBe(propsData.createdAt)
    expect(wrapper.find('.thumbnail').attributes('src')).toBe(propsData.thumbnail)
  })
})