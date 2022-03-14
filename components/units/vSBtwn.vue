<template>
  <div class="vsbtwn" :style="{width, height}">
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
.vsbtwn {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}
</style>