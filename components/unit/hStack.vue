<template>
  <div
    :class="`hstack ${division ? 'division' : ''}`"
    :style="{ width, height, justifyContent, alignItems }"
  >
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
    division: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.hstack {
  display: flex;
  width: 100%;
  height: 100%;
}

.division > *::after {
  content: '|';
  float: right;
  display: block;
  margin: 0 10px;
  color: #36373c;
}

.division > *:last-child::after {
  content: '';
}
</style>
