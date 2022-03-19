import { mount } from '@vue/test-utils'
import Profile from '@/components/blog/Profile.vue'

describe('Profile.vue', () => {
  test('컴포넌트 렌더링', () => {
    const wrapper = mount(Profile);

    expect(wrapper.find('#profile').exists()).toBeTruthy();
  })

  test('필요한 요소를 렌더링하는지', () => {
    const wrapper = mount(Profile)

    expect(wrapper.find('#profile-img').exists()).toBeTruthy()
    expect(wrapper.find('#nickname').exists()).toBeTruthy()
    expect(wrapper.find('#introduce').exists()).toBeTruthy()
  })

  test('props로 전달받은 값을 보여주는지', () => {
    const propsData = {
      nickname: 'tester',
      introduce: 'testtest',
      profileImg: 'testimg'
    }
    const wrapper = mount(Profile, {
      propsData
    })

    expect(wrapper.find('#profile-img').attributes('src')).toBe(propsData.profileImg)
    expect(wrapper.find('#nickname').text()).toBe(propsData.nickname)
    expect(wrapper.find('#introduce').text()).toBe(propsData.introduce)
  })
})