<template>
  <article data-test="content">
    <figure v-if="img" data-test="content-thumbnail">
      <img :src="img" />
    </figure>
    <section id="content-section">
      <p id="title" data-test="content-title">{{title}}</p>
      <p id="description" data-test="content-description">{{description}}</p>
    </section>
    <footer>
      <p data-test="content-author">by {{author}}</p>
      <p data-test="content-like">{{like}}</p>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'ContentComponent',
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    like: {
      type: Number,
      default: 0
    },
  }
}
</script>

<style lang="scss" scoped>
article {
  position: relative;
  width: 288px;
  height: 320px;
  background: #323335;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: #fff;

  figure {
    position: relative;
    margin: 0;
    width: 100%;
    padding-top: 50%;
    background: #f00;
    border-radius: 4px 4px 0px 0px;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: auto
    }
  }

  #title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
  }

  #content-section {
    padding: 12px;
    width: 100%;
  }

  #description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 32px;
    border-top: 1px solid #474749;
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      margin: 0;
    }
  }
}
</style>