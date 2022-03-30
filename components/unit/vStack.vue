<template>
  <div class="vstack" :style="{ width, height, justifyContent, alignItems }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
    justifyContent: {
      type: String,
      default: 'flex-start',
    },
    alignItems: {
      type: String,
      default: 'flex-start',
    },
  },
};
</script>

<style scoped>
.vstack {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
</style>
