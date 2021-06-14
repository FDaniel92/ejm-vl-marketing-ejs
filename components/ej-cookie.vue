<template>
  <div class="cookie-bar" ref="cokkiebar">
    <div class="container sm-column row">
      <slot name="cookieParagraph"></slot>
      <button class="cookie-bar-btn" @click="acceptCookies()">Rendben</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ej-cookie",
  methods: {
    setCookie(cname, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + "accepted" + ";" + expires + ";path=/";
    },
    getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    acceptCookies() {
      this.setCookie("cac", 30);
      this.$refs.cokkiebar.classList.remove("visible");
    },
    checkCac() {
      var cac = this.getCookie("cac");
      if (cac === "") {
        this.$refs.cokkiebar.classList.add("visible");
      }
    },
  },
  mounted() {
    this.checkCac();
  },
};
</script>

<style lang="scss">
.cookie-bar {
  background: white;
  color: #1e1e1e;
  justify-content: center;
  align-content: center;
  align-items: center;
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px 0 15px 0;
  z-index: 1000000;
  .container {
    align-items: center;
    align-content: center;
    justify-content: center;
    p {
      font-size: 14px;
      text-align: center;
      font-family: $sourceSansProRegular;
    }
    a {
      color: #aa8961;
      text-decoration: underline;
    }
  }
  .cookie-bar-btn {
    margin-top: 0;
    outline: none;
    transition: 0.25s ease-in-out;
    background: #c03;
    color: white;
    border-radius: 5px;
    padding: 6px 25px 8px;
    cursor: pointer;
    font-weight: 500;
    border: none;
    &:hover {
      color: white;
    }
  }
  &.visible {
    display: block;
  }
}
</style>