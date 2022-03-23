<template>
  <div>
    <p>{{ post }}</p>
  </div>
</template>

<script>
export default {
  asyncData({params}) {
    return {
      post: params.post,
    }
  },
}
</script>
