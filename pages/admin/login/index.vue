<template>
  <client-only>
    <div id="login" class="login-container">
      <img src="~@/assets/images/eJogsegedLogo.png" alt="e-Jogsegéd logó" loading="lazy" />
      <h1>Bejelentkezés</h1>
      <p>Belépés az e-Jogsegéd blog admin felületére</p>
      <form @submit.prevent="login">
        <admin-input
          ref="nameInput"
          type="text"
          name="name"
          id="name"
          v-model="user.username"
          inputLabel="Felhasználónév"
        />

        <admin-input-pass
          ref="passInput"
          type="password"
          name="password"
          id="password"
          v-model="user.password"
          inputLabel="Jelszó"
        />
        <admin-button type="submit" label="Belépek"></admin-button>
      </form>

      <div class="error-message">
        <p>{{ errorMsg }}</p>
      </div>
    </div>
  </client-only>
</template>

<script>
import AdminInput from "../../../components/admin-components/AdminInput";
import AdminInputPass from "../../../components/admin-components/AdminInputPass.vue";
import AdminButton from "../../../components/admin-components/AdminButton.vue";

export default {
  layout: "admin",
  head: {
    bodyAttrs: {
      class: 'login'
    }
  },
  components: {
    AdminInput,
    AdminInputPass,
    AdminButton,
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      arr: [],
      errorMsg: "",
      returnValue: true,
      isActiveSuccess: false,
    };
  },
  methods: {
    login() {
      this.$axios.post("https://jsonplaceholder.typicode.com/posts", { user: this.user }).then(({ data }) => {
        if (data.auth === "ok") {
          this.$store.dispatch("setAuthenticated");
          this.$router.push({ name: "admin" });
        } else {
          this.errorMsg = "Hibás felhasználónév vagy jelszó!";
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/styles/template/fonts/fonts.scss";

.login-container {
  background: white;
  padding: 50px 30px;
  width: 400px;
  margin: 0 auto;
  font-family: SourceSansProBold;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  position: relative;
  top: 40%;
  transform: translateY(40%);
  box-sizing: border-box;
  box-shadow: 0 0 20px 0 rgba(40, 40, 40, 0.1);
  &:before {
    content: "";
    position: absolute;
    left: -200%;
    top: 0;
    width: 200%;
    height: 100%;
    background: white;
  }
  img {
    width: 50%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;
  }
  h1 {
    font-size: 35px;
    margin-bottom: 30px;
    text-align: center;
  }
  p {
    font-family: "SourceSansPro";
    text-align: center;
    margin-bottom: 30px;
  }
  button {
    margin-bottom: 20px;
  }

  .error-message {
    p {
      color: red;
      font-size: 13px;
    }
  }
}
</style>