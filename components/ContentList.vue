<template>
  <section data-test="ContentList">
    <Content
      v-for="item in contents"
      :key="item.id"
      v-bind="item"
    />
  </section>
</template>

<script>
import Content from "./Content.vue"

export default {
  name: 'ContentList',
  components: { Content },
  props: {
    contents: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
}
</script>

<style scoped>
section {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
}

@media all and (min-width: 1272px) and (max-width: 1640px) {
  section {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media all and (min-width: 944px) and (max-width: 1272px) {
  section {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media all and (min-width: 616px) and (max-width: 944px) {
  section {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media all and (max-width: 616px) {
  section {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>