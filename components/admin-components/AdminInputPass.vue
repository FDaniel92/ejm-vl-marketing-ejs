<template>
  <div class="form-group">
    <input
      :value="value"
      :type="[showPassword ? 'text' : 'password']"
      :name="name"
      :id="id"
      @input="updateValue($event.target.value)"
      @focus="updateLabelProp"
      @blur="removeLabelProp"
    />
    <label
      :class="{ active: classes.isActive, error: classes.isError }"
      ref="labelForInput"
      :for="name"
      >{{ inputLabel }}</label
    >
    <div class="eye" @click="showPassword = !showPassword">&#128065;<span class="no-eye" v-if="showPassword"></span></div>
    <span :class="{ active: classes.isActiveRequire }">{{ requiredText }}</span>
  </div>
</template>

<script>
export default {
  name: "admin-input",
  props: {
    value: String,
    name: String,
    type: String,
    id: String,
    inputLabel: String,
  },
  data() {
    return {
      showPassword: false,
      requiredText: null,
      classes: {
        isActive: false,
        isError: false,
        isActiveRequire: false,
      },
    };
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    updateLabelProp() {
      this.classes.isActive = true;
    },
    removeLabelProp() {
      if (!this.value) {
        this.classes.isActive = false;
      }
    },
  },
};
</script>

<style lang="scss">
.form-group {
  position: relative;
  margin-bottom: 30px;
  input {
    border: 1px solid #d6d6d6;
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    padding: 20px 50px 15px 15px;
    background: none;
    position: relative;
    background: #ffffff;
    font-family: SourceSansPro;
    &:focus {
      outline: none;
    }
    &.error {
      border: 1px solid #d9534f;
    }
  }
  .eye {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
    font-size: 25px;
    color: #1e1e1e;
    .no-eye {
      position: absolute;
      top: 4px;
      left: 12px;
      width: 1px;
      height: 20px;
      background: black;
      transform: rotate(45deg);
    }
  }
  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    transition: 0.25s ease-in-out;
    font-size: 16px;
    font-family: SourceSansPro;
    &.active {
      top: 25%;
      z-index: 3;
      color: #a0a0a0;
      font-size: 12px;
    }
    &.error {
      color: #d9534f;
    }
  }
  span {
    font-size: 12px;
    color: #d9534f;
    position: absolute;
    bottom: -18px;
    left: 10px;
    &.active {
      display: block;
    }
  }
}
</style>