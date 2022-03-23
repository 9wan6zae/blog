<template>
  <div id="wrapper">
    <main>
      <h1>블로그</h1>
      <content-list :contents="contents" />
    </main>
  </div>
</template>

<script>
import ContentList from '../components/ContentList.vue'
export default {
  name: 'IndexPage',
  components: { ContentList },
  data() {
    return {
      contents: [
        {
          id: 0,
          img: 'http://blog.jinbo.net/attach/615/200937431.jpg',
          title:
            '[Node.js] npm은 무엇일까 npm은 무엇일까 npm은 무엇일까 npm은 무엇일까 npm은 무엇일까',
          description:
            'npm은 node.js에서 만든 패키니 매니저입니다 npm은 node.js에서 만든 패키니 매니저입니다 npm은 node.js에서 만든 패키니 매니저입니다',
          author: 'tester',
          like: 17,
        },
        {
          id: 1,
          img: '',
          title: 'npm은 무엇일까',
          description: 'ttt',
          author: 'tester',
          like: 17,
        },
        {
          id: 2,
          img: '',
          title: 'npm은 무엇일까',
          description: 'ttt',
          author: 'tester',
          like: 17,
        },
        {
          id: 3,
          img: '',
          title: 'npm은 무엇일까',
          description: 'ttt',
          author: 'tester',
          like: 17,
        },
        {
          id: 4,
          img: '',
          title: 'npm은 무엇일까',
          description: 'ttt',
          author: 'tester',
          like: 17,
        },
      ],
    }
  },
}
</script>

<style scoped>
#wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

main {
  max-width: 1600px;
  padding: 0 20px;

  box-sizing: content-box;
}
</style>
