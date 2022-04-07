<template>
  <div id="header-wrapper">
    <header id="header">
      <section id="logo-section">
        <p v-if="nickname" id="nickname">{{ nickname }}</p>
        <p v-else id="logo">블로그</p>
      </section>
      <p id="login-btn" @click="openModal">로그인</p>
    </header>
    <login-modal v-model="open" />
  </div>
</template>

<script>
import LoginModal from './modal/LoginModal.vue';

export default {
  name: 'AppHeader',
  components: {
    LoginModal,
  },
  data() {
    return {
      nickname: '',
      open: false,
    };
  },
  watch: {
    $route() {
      this.setNickname();
    },
  },
  mounted() {
    this.setNickname();
  },
  methods: {
    setNickname() {
      if (this.$route) {
        const { params } = this.$route;
        if (params.id) {
          this.nickname = params.id.slice(1);
        } else {
          this.nickname = '';
        }
      }
    },
    openModal() {
      this.open = true;
    },
  },
};
</script>

<style scoped>
#header-wrapper {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
header {
  width: 100%;
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
}

#login-btn {
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: #2bdd5d;
}

#nickname {
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #ffffff;
}
</style>
