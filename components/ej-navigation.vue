<template>
  <nav class="ej-navigation container">
    <div class="ej-navigation__logo">
      <a href="/">
        <img src="~@/assets/images/eJogsegedLogo.png" alt="e-jogsegéd logó" loading="lazy" />
      </a>
    </div>
    <div class="ej-navigation__menu">
      <div
        class="ej-navigation__burgermenu"
        @click="burgermenuActive = !burgermenuActive"
      >
        <div
          class="ej-navigation__burgermenu-line"
          :class="{ rotateFirst: burgermenuActive }"
        ></div>
        <div
          class="ej-navigation__burgermenu-line"
          :class="{ rotateSecond: burgermenuActive }"
        ></div>
        <div
          class="ej-navigation__burgermenu-line"
          :class="{ hideLine: burgermenuActive }"
        ></div>
      </div>
      <ul
        class="ej-navigation__menu-container column-mobile"
        :class="{ openMenu: burgermenuActive }"
      >
        <li class="ej-navigation__menu-item" @click="scroll()">
          <nuxt-link to="/?t=services">Szolgáltatások</nuxt-link>
        </li>
        <li class="ej-navigation__menu-item" @click="scroll()">
          <nuxt-link to="/?t=whyus">Miért az e-jogseged?</nuxt-link>
        </li>
        <li class="ej-navigation__menu-item" @click="scroll()">
          <nuxt-link to="/?t=references">Referenciák</nuxt-link>
        </li>
        <li class="ej-navigation__menu-item">
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li class="ej-navigation__menu-item">
          <nuxt-link to="/connect">Kapcsolat</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "ej-navigation",
  data() {
    return {
      burgermenuActive: false,
    };
  },
  methods: {
    scroll() {
      let el = window.location.href.split("/?t=")[1];
      let ele = document.getElementById(el);
      if (ele) this.$scrollTo(ele, 1000);
    },
  },
};
</script>

<style lang="scss">
.ej-navigation {
  display: flex;
  flex-direction: row;
  position: relative;

  &__logo {
    display: flex;
    margin-right: auto;
    align-items: flex-start;
    padding: 20px;

    @media (min-width: $xl-devices) {
      align-items: center;
      padding: 0;
    }
    img {
      width: auto;
      height: 50px;
    }
  }

  &__menu {
    background: $color-2;
    position: relative;
    width: 350px;
    z-index: 1000;
    @media (min-width: $lg-devices) {
      padding: 42px 0 42px 100px;
      display: flex;
      align-items: center;
      z-index: 2;
      width: auto;
    }
    @media (min-width: $xl-devices) {
      padding: 42px 0 42px 260px;
    }
  }

  &__burgermenu {
    width: 50px;
    height: 25px;
    position: absolute;
    top: 32px;
    right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (min-width: $lg-devices) {
      display: none;
    }
  }
  &__burgermenu-line {
    width: 30px;
    height: 2px;
    background: white;
    transition: 0.2s ease-in-out;
    position: relative;
    &.rotateFirst {
      transform: rotate(50deg);
      top: 13px;
    }
    &.rotateSecond {
      transform: rotate(-45deg);
    }
    &.hideLine {
      width: 0;
      visibility: hidden;
      bottom: 5px;
    }
  }

  &__menu-container {
    display: flex;
    flex-direction: column;
    height: 0;
    transition: 0.2s ease-in-out;
    text-align: right;
    margin-top: 98px;
    overflow: hidden;
    &.openMenu {
      width: 100%;
      height: 280px;
    }
    @media (min-width: $lg-devices) {
      height: auto;
      padding: 0;
      transition: none;
      margin-top: 0;
      flex-direction: row;
    }
  }

  &__menu-item {
    color: $color-1;
    margin-right: 15px;
    cursor: pointer;
    text-transform: uppercase;
    font-family: $sourceSansProRegular;
    letter-spacing: 0.15em;
    font-size: $font-small;
    margin-bottom: 30px;
    @media (min-width: $lg-devices) {
      margin-bottom: 0;
    }
    &:last-child {
      @media (min-width: $xl-devices) {
        margin-right: 0;
      }
    }
    a {
      color: $color-1;
      text-decoration: none;
    }
  }
}
</style>