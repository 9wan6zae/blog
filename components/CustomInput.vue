<template>
  <div id="input-wrapper">
    <input
      ref="input"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="emitValue"
    />
    <p id="invalid-message">{{alertMessage}}</p>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    reg: {
      type: RegExp,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
  },
  computed: {
    isValid() {
      return this.value === '' || this.value.match(this.reg);
    },
    alertMessage() {
      return this.isValid ? '' : this.message;
    },
  },
  methods: {
    emitValue() {
      this.$emit('input', this.$refs.input.value);
    },
  },
};
</script>

<style scoped>
#input-wrapper {
  width: 100%;
}

input {
  width: 100%;
  height: 60px;
  border-radius: 3px;
  background: #232424;
  border: 1px solid #535353;
  padding: 10px 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  outline: none;
}

#invalid-message {
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.03em;

  color: #FF3939;
}
</style>
