import { mount, flushPromises } from '@vue/test-utils'
import WritePage from '@/pages/writePage.vue'

describe('WritePage', () => {
  test('페이지를 렌더링 하는지', () => {
    const wrapper = mount(WritePage)

    expect(wrapper.get('#write-page')).toBeTruthy()
  })
  describe('제목 입력', () => {
    test('제목을 입력할 input이 있는가', () => {
      const wrapper = mount(WritePage)

      expect(wrapper.get('[data-test="title-input"]')).toBeTruthy()
    })
  })
  describe('이미지 추가', () => {
    test('이미지를 추가할 수 있는 버튼이 있는가', () => {
      const wrapper = mount(WritePage)

      expect(wrapper.get('[data-test="img-add-btn"]')).toBeTruthy()
    })
    test('이미지 추가 버튼을 누르면 이미지 태그가 추가되는가', async () => {
      const wrapper = mount(WritePage)

      const imgAddBtn = wrapper.get('[data-test="img-add-btn"]')

      await imgAddBtn.trigger('click')

      expect(wrapper.get('[data-test="viewer"]').html()).toContain('img')
    })
  })
  describe('내용 입력', () => {
    test('내용을 입력할 textarea가 있는가', () => {
      const wrapper = mount(WritePage)

      expect(wrapper.get('[data-test="content-input"]')).toBeTruthy()
    })
    test('입력한 내용이 표시되는가', async () => {
      const wrapper = mount(WritePage)

      wrapper.get('[data-test="content-input"]').setValue('### test')

      await flushPromises

      expect(wrapper.get('[data-test="viewer"]').html()).toContain(`<h3 id="test">test</h3>`)
    })
  })
})
