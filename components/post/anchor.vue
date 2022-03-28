<template>
  <div style="position: relative">
    <v-stack id="anchor-wrapper" width="160px">
      <a v-for="a in anchors" :key="a.id" :href="`#${a.id}`" :style="{marginLeft: `${(a.level - 1) * 20}px`}">
        {{a.text}}
      </a>
    </v-stack>
  </div>
</template>

<script>
import vStack from '../unit/vStack.vue'
export default {
  name: 'PostAnchor',
  components: { vStack },
  props: {
    anchors: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>

<style scoped>
#anchor-wrapper {
  position: absolute;
  left: 100%;
}

.anchor1 {
  margin-left: 0
}

.anchor2 {
  margin-left: 20px
}

.anchor3 {
  margin-left: 40px
}
</style>