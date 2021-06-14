<template>
  <div class="form-group">
    <p>{{ selectLabel }}</p>
    <select @input="clicked">
      <option
        v-for="option in options"
        :key="option.name"
        :value="option.name"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "admin-selector",
  props: {
    selectLabel: String,
    value: {
      required: false,
    },
    options: {
      type: Array,
    },
    name: String,
    id: String,
  },
  methods: {
    clicked($event) {
      this.$emit("input", $event.target.value);
    },
  },
};
</script>

<style lang="scss">
.form-group {
  position: relative;
  margin-bottom: 30px;

  p {
    padding: 0 0 15px 15px;
    font-family: SourceSansPro;
  }

  select {
    border: 1px solid #d6d6d6;
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    padding: 20px 15px 15px 15px;
    background: none;
    position: relative;
    background: #ffffff;
    font-family: SourceSansPro;
    &:focus {
      outline: none;
    }
  }
}
</style>