<template>
  <div id="post-wrapper">
    <h1 id="title" data-test="title">{{ title }}</h1>
    <anchor :anchors="anchors" />
    <h-stack id="post-info" justify-content="space-between">
      <h-stack division>
        <p id="category" data-test="category">node</p>
        <p id="createdAt" data-test="createdAt">2022.01.01</p>
      </h-stack>
      <h-stack id="modify-btns" division width="10vw">
        <a data-test="edit-btn">수정</a>
        <a data-test="delete-btn">삭제</a>
      </h-stack>
    </h-stack>
    <!-- eslint-disable vue/no-v-html -->
    <div id="viewer" data-test="viewer" v-html="compiledMarkdown" />
  </div>
</template>

<script>
import marked from 'marked'
import hStack from '../../components/unit/hStack.vue'
import Anchor from '../../components/post/anchor.vue'

export default {
  components: { hStack, Anchor },
  asyncData({ params }) {
    return {
      post: params.post,
    }
  },
  data() {
    return {
      title: '타이틀입니다',
      content: `# test\n## test\n여러가지 글들을 나열합니다\n## test\n여러가지 글들을 나열합니다\n## test\n여러가지 글들을 나열합니다\n## test\n여러가지 글들을 나열합니다\n### test\n### test\n# test\n## test\n여러가지 글들을 나열합니다\n## test\n여러가지 글들을 나열합니다\n## test\n여러가지 글들을 나열합니다\n## test\n여러가지 글들을 나열합니다\n### test\n### test`,
      markedContent: '',
      ids: {},
      anchors: []
    }
  },
  computed: {
    compiledMarkdown() {
      const renderer = new marked.Renderer();

      renderer.heading = (text, level) => {
        let id = text.replace(' ', '-');

        if (id in this.ids) {
          this.ids[id].dup += 1
          id = `${id}-${this.ids[id].dup}`
        } else {
          this.ids[id] = {
            dup: 0
          }
        }

        this.anchors.push({
          text,
          id,
          level
        })

        return `
          <h${level} id="${id}">
            ${text}
          </h${level}>
        `
      }
      return marked(this.content, {renderer})
    },
  },
}
</script>

<style scoped>
#post-wrapper {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}

#title {
  font-weight: 700;
  font-size: 40px;
  line-height: 58px;
}

#post-info {
  font-weight: 400;
  font-size: 16px;
}

#category {
  color: var(--emphasis);
}

#createdAt {
  color: #a6a6a7;
}

#modify-btns > a {
  color: var(--emphasis);
}
</style>
