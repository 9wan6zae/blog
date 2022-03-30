import { mount } from '@vue/test-utils';
import Content from '@/components/Content.vue';

describe('Content.vue', () => {
  test('컴포넌트 렌더링', () => {
    const wrapper = mount(Content);

    expect(wrapper.find('[data-test="content"]').exists()).toBeTruthy();
  });

  describe('썸네일', () => {
    test('썸네일이 있으면 보여주는가', () => {
      const wrapper = mount(Content, {
        propsData: {
          img: 'test',
        },
      });

      expect(
        wrapper.find('[data-test="content-thumbnail"]').exists(),
      ).toBeTruthy();
    });

    test('썸네일이 없으면 보여주지 않는가', () => {
      const wrapper = mount(Content, {
        propsData: {
          img: '',
        },
      });

      expect(
        wrapper.find('[data-test="content-thumbnail"]').exists(),
      ).toBeFalsy();
    });
  });

  test('제목을 보여주는가', () => {
    const wrapper = mount(Content, {
      propsData: {
        title: 'test',
      },
    });

    expect(wrapper.find('[data-test="content-title"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-test="content-title"]').text()).toBe('test');
  });
  test('설명을 보여주는가', () => {
    const wrapper = mount(Content, {
      propsData: {
        description: 'test',
      },
    });

    expect(
      wrapper.find('[data-test="content-description"]').exists(),
    ).toBeTruthy();
    expect(wrapper.find('[data-test="content-description"]').text()).toBe(
      'test',
    );
  });
  test('작성자를 보여주는가', () => {
    const wrapper = mount(Content, {
      propsData: {
        author: 'test',
      },
    });

    expect(wrapper.find('[data-test="content-author"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-test="content-author"]').text()).toContain(
      'test',
    );
  });
  test('좋아요수를 보여주는가', () => {
    const wrapper = mount(Content, {
      propsData: {
        like: 5,
      },
    });

    expect(wrapper.find('[data-test="content-like"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-test="content-like"]').text()).toBe('5');
  });
});
