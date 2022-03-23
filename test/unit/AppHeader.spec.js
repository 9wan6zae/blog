import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('AppHeader', () => {
  test('컴포넌트 렌더링', () => {
    const wrapper = mount(AppHeader)

    expect(wrapper.get('#header-wrapper')).toBeTruthy()
  })

  test('필요한 요소를 렌더링하는지', () => {
    const wrapper = mount(AppHeader)

    expect(wrapper.find('#login-btn').exists()).toBeTruthy()
    expect(wrapper.find('#logo-section').exists()).toBeTruthy()
  })
})
