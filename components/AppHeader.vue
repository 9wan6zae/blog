<template>
  <div id="header-wrapper">
    <header id="header">
      <section id="logo-section">
        <p v-if="nickname" id="nickname">{{ nickname }}</p>
        <p v-else id="logo">블로그</p>
      </section>
      <p id="login-btn">로그인</p>
    </header>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      nickname: '',
    }
  },
  watch: {
    $route (to, from) {
      this.setNickname(to.path)
    }
  },
  mounted() {
    const pathname = this.$route.path
    this.setNickname(pathname)
  },
  methods: {
    setNickname(pathname) {
      pathname = this.$route.path.slice(2)
      if (pathname) {
        this.nickname = pathname.split('/')[0]
      } else {
        this.nickname = ''
      }
    }
  },
}
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
