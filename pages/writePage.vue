<template>
  <div id="write-page">
    <section id="section-wrapper" style="background: #242526">
      <section id="editor-section" data-test="editor-section">
        <form>
          <input
            id="title-input"
            v-model="postTitle"
            data-test="title-input"
            type="text"
            placeholder="제목을 입력하세요"
          />
        </form>
        <button data-test="img-add-btn" @click="addImage">test</button>
        <textarea
          id="markdown-editor"
          ref="markdownEditor"
          v-model="input"
          data-test="content-input"
          placeholder="글을 작성하세요"
          @input="update"
        />
      </section>
    </section>
    <section id="section-wrapper" style="background: #202122">
      <!-- eslint-disable vue/no-v-html -->
      <div id="viewer" data-test="viewer" v-html="compiledMarkdown" />
    </section>
  </div>
</template>

<script>
import marked from 'marked'
import _ from 'lodash'

export default {
  name: 'WritePage',
  data() {
    return {
      input: '',
      postTitle: '',
      url: 'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg',
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input)
    },
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300),
    addImage(imgInfo) {
      const editor = this.$refs.markdownEditor
      const original = editor.value
      const front = original.substring(0, editor.selectionStart)
      const end = original.substring(editor.selectionStart, original.length)

      this.input = `${front}![](${this.url})${end}`
    },
  },
}
</script>

<style lang="scss" scoped>
#title-input {
  width: 100%;
  outline: none;
  border: none;
  font-size: 40px;
  background: none;
  color: #fff;

  &::placeholder {
    color: #8f9090;
  }
}

#write-page {
  display: flex;
  justify-content: space-between;
  height: 100vh;
}

#section-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  padding-top: 40px;
}

#editor-section {
  width: 100%;
  max-width: 720px;
}

#markdown-editor {
  width: 100%;
  max-width: 50vw;
  height: 50vh;
  color: #fff;
  padding: 0 !important;
  background-color: transparent !important;
  border: none !important;
}

#viewer {
  width: 100%;
  max-width: 50vw;
  color: #fff;
  overflow: auto;
  img {
    width: 100%;
  }
}

#markdown-editor {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: red;
}
</style>
