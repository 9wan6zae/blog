<template>
  <div class="posts-wrapper">
    <p class="noti">총 <span style="color: #2BDD5D">{{posts.length}}</span>개의 포스팅이 존재합니다</p>
    <post
      v-for="post in posts"
      :key="post.id"
      v-bind="post"
    />
  </div>
</template>

<script>
import Post from './Post.vue'
export default {
  name: 'BlogPosts',
  components: { Post },
  props: {
    posts: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped>
.posts-wrapper {
  padding: 29px 58px 0px 71px;
}

.noti {
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  margin: 0px;
  padding-bottom: 10px;

  border-bottom: 1px solid #535353;
}
</style>