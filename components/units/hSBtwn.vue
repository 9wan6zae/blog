<template>
  <div class="hsbtwn" :style="{width, height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    }
  }
}
</script>

<style scoped>
.hsbtwn {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
</style>