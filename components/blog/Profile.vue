<template>
  <div id="profile">
    <section id="profile-wrapper">
      <img id="profile-img" :src="profileImg" alt="profile-img" />
      <div>
        <div>
          <p id="nickname">{{ nickname }}</p>
        </div>
        <p id="introduce">{{ introduce }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogProfile',
  props: {
    nickname: {
      type: String,
      default: '',
    },
    introduce: {
      type: String,
      default: '',
    },
    profileImg: {
      type: String,
      default: '',
    },
    githubUrl: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
#profile {
  padding: 40px 58px 17px 71px;
  width: 100%;
  height: 217px;
}

#profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

#profile-wrapper {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  width: 720px;
  height: 160px;
}

#nickname {
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  margin: 0;
}

#introduce {
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
}
</style>
