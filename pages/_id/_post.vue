<template>
  <div id="post-wrapper">
    <h1 id="title" data-test="title">{{title}}</h1>
    <h-stack justify-content="space-between">
      <h-stack division>
        <p id="category" data-test="category">node</p>
        <p id="createdAt" data-test="createdAt">2022.01.01</p>
      </h-stack>
      <h-stack id="modify-btn" division width="10vw">
        <p data-test="edit-btn">수정</p>
        <p data-test="delete-btn">삭제</p>
      </h-stack>
    </h-stack>
    <!-- eslint-disable vue/no-v-html -->
    <div id="viewer" data-test="viewer" v-html="compiledMarkdown" />
  </div>
</template>

<script>
import marked from 'marked'
import hStack from '../../components/unit/hStack.vue'

export default {
  components: { hStack },
  asyncData({ params }) {
    return {
      post: params.post,
    }
  },
  data() {
    return {
      title: '타이틀입니다',
      input: '# test\n## test'
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input)
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
</style>