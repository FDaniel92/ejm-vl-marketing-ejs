<template>
  <footer>
    <div class="container">
      <ul class="footer-menu column-mobile row">
        <li>
          <nuxt-link to="/">E-jogsegéd 2020</nuxt-link>
        </li>
         <li class="hide-lg" @click="scroll()">
          <nuxt-link to="/?t=services">Szolgáltatások</nuxt-link>
        </li>
        <li class="hide-lg" @click="scroll()">
          <nuxt-link to="/?t=whyus">Miért az e-jogseged?</nuxt-link>
        </li>
        <li class="hide-lg" @click="scroll()">
          <nuxt-link to="/?t=references">Referenciák</nuxt-link>
        </li>
        <li class="hide-lg">
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Adatvédelmi nyilatkozat</nuxt-link>
        </li>
        <li class="hide-lg">
          <nuxt-link to="/connect">Kapcsolat</nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ej-footer",
    methods: {
    scroll() {
      let el = window.location.href.split("/?t=")[1];
      let ele = document.getElementById(el);
      if (ele) this.$scrollTo(ele, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  background: $color-2;
  .footer-menu {
    list-style: none;
    padding: 25px 0;
    align-items: center;
    @media (min-width: $lg-devices) {
      align-items: flex-start;
    }
    li {
      text-transform: uppercase;
      font-family: SourceSansPro;
      font-size: 12px;
      letter-spacing: 0.15em;
      margin-right: 15px;
      margin-bottom: 15px;
      @media (min-width: $lg-devices) {
        margin-bottom: 0;
      }
      &:first-child {
        margin-right: 0;
        @media (min-width: $lg-devices) {
          margin-right: auto;
        }
      }
      &:last-child {
        margin-right: 0;
      }
      a {
        text-decoration: none;
        color: $color-1;
      }
    }
  }
}
</style>