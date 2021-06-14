<template>
  <button class="button">{{ label }}</button>
</template>

<script lang="js">
export default {
    name: 'admin-button',
    props: {
      label: String
    }
}
</script>

<style lang="scss">
.button {
  padding: 18px 35px;
  font-size: 16px;
  border-radius: 4px;
  letter-spacing: 2.16px;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: auto;
  background: #aa8960;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  font-family: SourceSansPro;
  &:hover {
    background: #997A55;
  }
}
</style>