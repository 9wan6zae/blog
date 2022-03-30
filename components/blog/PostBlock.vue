<template>
  <div class="post-wrapper">
    <h-stack height="140px" justify-content="space-between">
      <v-stack justify-content="space-between">
        <div>
          <p class="title">{{ title }}</p>
          <p class="description">{{ description }}</p>
        </div>
        <h-stack class="post-info" height="20px" align-items="center" division>
          <p class="category">{{ category }}</p>
          <p class="createdAt">{{ createdAt }}</p>
        </h-stack>
      </v-stack>
      <img class="thumbnail" :src="thumbnail" alt="thumbnail" />
    </h-stack>
  </div>
</template>

<script>
import HStack from '../unit/hStack.vue';
import VStack from '../unit/vStack.vue';

export default {
  name: 'BlogPost',
  components: { VStack, HStack },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    createdAt: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.post-wrapper {
  width: 100%;
  padding: 40px 0px;
  border-bottom: 1px solid #2f3033;
}

.title {
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  margin: 0;
}

.description {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.03em;

  color: #d2d3d3;
}

.thumbnail {
  width: 140px;
  height: 140px;
  object-fit: cover;
}

.post-info {
  margin: 0;
}

.category {
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.03em;

  color: #2bdd5d;
}

.createdAt {
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.03em;

  color: #a6a6a7;
}

.divider {
  width: 1px;
  height: 15px;
  left: 670px;
  top: 664px;

  background: #36373c;
}
</style>
