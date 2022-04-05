<template>
  <div id="modal">
    <article id="modal-wrapper">
      <header>
        <slot name="title"/>
      </header>
      <main>
        <slot name="content"/>
      </main>
    </article>
    <div id="mask" @click="close"></div>
  </div>
</template>

<script>

export default {
  name: 'DefaultModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    open(open) {
      const body = document.querySelector('body');
      if (open) {
        body.classList.add('block-scroll');
      } else {
        body.classList.remove('block-scroll');
      }
      console.log(body);
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
#modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
#modal-wrapper {
  width: 520px;
  background: #202122;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 40px 40px 20px 40px;
  z-index: 2;
}
#mask {
  width: 100%;
  height: 100%;
  background: rgba(32, 33, 34, 0.3);
  z-index: 1;
}

header {
  margin-bottom: 40px;
}

header * {
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
}
</style>
