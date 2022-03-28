import { mount } from '@vue/test-utils'
import PostPage from '@/pages/_id/_post.vue'

describe('PostPage.vue', () => {
  test('페이지를 렌더링하는지', () => {
    const wrapper = mount(PostPage)

    expect(wrapper.find('#post-wrapper').exists()).toBeTruthy()
  })
  test('필요한 요소를 렌더링하는지', () => {
    const wrapper = mount(PostPage)

    expect(wrapper.find('[data-test="title"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-test="category"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-test="createdAt"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-test="edit-btn"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-test="delete-btn"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-test="viewer"]').exists()).toBeTruthy()
  })
})
