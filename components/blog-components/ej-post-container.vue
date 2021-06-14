<template>
  <div class="post-container">
    <div class="post-container__maintitle">
      <h2>Bejegyzéseink</h2>
      <hr />
    </div>
    <ej-post
      v-for="(post, index) in articles"
      :post="post"
      :key="index"
    ></ej-post>
  </div>
</template>

<script>
import ejPost from "~/components/blog-components/ej-post.vue";
export default {
  name: "ej-post-container",
  data() {
    return {
      articles: [],
    };
  },
  async fetch() {
    this.articles = await fetch("http://localhost:3001/articles").then((res) =>
      res.json()
    );
  },
  components: {
    ejPost,
  },
};
</script>

<style lang="scss">
.post-container {
  background: white;
  position: relative;
  border-bottom: 4px solid $color-3;
  &__maintitle {
    padding: 60px 20px 40px 20px;
    @media (min-width: $lg-devices) {
      padding: 60px 70px 40px 70px;
    }
    h2 {
      font-family: $playFairRegular;
      font-weight: 400;
      font-size: 2.6rem;
      color: $color-3;
      border-bottom: 2px solid $color-3;
      padding-bottom: 10px;
    }
  }
}
</style>