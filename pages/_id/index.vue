<template>
  <div>
    <div id="wrapper">
      <main>
        <profile v-bind="profile" />
        <posts :posts="posts" />
      </main>
    </div>
  </div>
</template>

<script>
import Posts from '../../components/blog/Posts.vue'
import Profile from '../../components/blog/Profile.vue'
export default {
  name: 'CustomerBlog',
  components: {
    Profile,
    Posts,
  },
  asyncData({ params }) {
    return {
      id: params.id,
    }
  },
  data() {
    return {
      id: '',
      profile: {
        nickname: 'tester',
        profileImg: 'http://blog.jinbo.net/attach/615/200937431.jpg',
        introduce: 'testtest',
        githubUrl: '',
      },
      posts: [
        {
          id: 0,
          title: 'test',
          description: 'test',
          thumbnail: 'http://blog.jinbo.net/attach/615/200937431.jpg',
          category: 'test',
          author: 'test',
          createdAt: '2022-01-01',
        },
        {
          id: 1,
          title: 'test',
          description: 'test',
          thumbnail: 'http://blog.jinbo.net/attach/615/200937431.jpg',
          category: 'test',
          author: 'test',
          createdAt: '2022-01-01',
        },
        {
          id: 2,
          title: 'test',
          description: 'test',
          thumbnail: 'http://blog.jinbo.net/attach/615/200937431.jpg',
          category: 'test',
          author: 'test',
          createdAt: '2022-01-01',
        },
        {
          id: 4,
          title: 'test',
          description: 'test',
          thumbnail: 'http://blog.jinbo.net/attach/615/200937431.jpg',
          category: 'test',
          author: 'test',
          createdAt: '2022-01-01',
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
  width: 849px;
}
</style>
