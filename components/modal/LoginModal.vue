<template>
  <modal v-show="value" :open="value" @close="close">
    <template #title>
      <h1>로그인</h1>
    </template>
    <template #content>
      <v-stack>
        <custom-input
          v-model="email"
          type="email"
          placeholder="이메일을 입력하세요. 예시: vlg@naver.com"
          :reg="emailReg"
          message="이메일의 형태가 아닙니다"
        />
        <custom-input
          v-model="password"
          type="password"
          placeholder="비밀번호를 입력하세요."
          :reg="pwReg"
          message="대문자, 특수 문자를 포함해 최소 8자를 입력해주세요"
        />
        <button id="login-btn">
          <p>이메일로 로그인</p>
        </button>
      </v-stack>
    </template>
  </modal>
</template>

<script>
import CustomInput from '../CustomInput.vue';
import VStack from '../unit/vStack.vue';
import Modal from './Modal.vue';

export default {
  components: { Modal, VStack, CustomInput },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      email: '',
      password: '',
      emailReg: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      pwReg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
    };
  },
  methods: {
    close() {
      this.$emit('input', false);
    },
  },
};
</script>

<style lang="scss" scoped>
#login-btn {
  width: 100%;
  height: 60px;
  background: var(--emphasis);
  border-radius: 3px;
  outline: none;
  border: none;

  p {
    color: #000;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    margin: 0;
  }
}
</style>
