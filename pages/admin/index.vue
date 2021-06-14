<template>
  <div id="admin" class="container">
    <h1>Az e-Jogsegéd blog adminisztrációs felülete</h1>
    <form
      method="post"
      @submit.prevent="saveFile"
      enctype="multipart/form-data"
    >
      <div class="form-group">
        <p>A Cikk írója:</p>
        <select @input="clicked" v-model="article.name">
          <option
            v-for="option in existWriters"
            :key="option.id"
            :value="option.name"
          >
            {{ option.name }}
          </option>
        </select>
      </div>

      <admin-input
        ref="titleInput"
        type="text"
        name="title"
        id="title"
        v-model="article.title"
        inputLabel="Blog címe"
      />

      <admin-input
        ref="blogTitleInput"
        type="text"
        name="blogTitleInput"
        id="blogTitleInput"
        v-model="article.blogTitle"
        inputLabel="Blog főcíme:"
      />

      <admin-input
        ref="blogSubTitleInput"
        type="text"
        name="blogSubTitleInput"
        id="blogSubTitleInput"
        v-model="article.blogSubTitle"
        inputLabel="Blog alcíme:"
      />

      <admin-button type="submit" label="Mentem"></admin-button>
    </form>
  </div>
</template>

<script>
import AdminInput from "../../components/admin-components/AdminInput";
import AdminTextArea from "../../components/admin-components/AdminTextArea.vue";
import AdminButton from "../../components/admin-components/AdminButton.vue";

export default {
  layout: "admin",
  head: {
    bodyAttrs: {
      class: "home",
    },
  },
  components: {
    AdminInput,
    AdminTextArea,
    AdminButton,
  },
  data() {
    return {
      article: {
        name: "",
        role: "",
        title: "",
        date: "",
        image: "",
        carouselImage: "",
        carouselImageAlt: "",
        blogTitle: "",
        blogSubTitle: "",
        blogContent: "",
      },
      existWriters: [],
    };
  },
  methods: {
    saveFile() {
      this.$axios.post("/articles", this.article).then(({ data }) => {
        for (let key in this.article) this.article[key] = null;
      });
    },
    clicked($event) {
      this.$emit("input", $event.target.value);
    },
  },
  async fetch() {
    this.existWriters = await fetch(
      "http://localhost:3001/articles"
    ).then((res) => res.json());
  },
};
</script>

<style lang="scss">
@import "~@/assets/styles/template/fonts/fonts.scss";
.container {
  width: 1170px;
  margin: 0 auto;

  h1 {
    font-family: SourceSansProBold;
    font-size: 35px;
    text-align: center;
    margin: 30px 0;
  }

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
