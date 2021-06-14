<template>
  <div id="full-blog">
    <div class="container-fluid blog-maintitle">
      <div class="container">
        <h2>Blog</h2>
      </div>
    </div>
    <div class="full-blog">
      <article class="blog-inner-container" v-if="post">
        <div class="blog-inner-container__header">
          <div class="row">
            <div class="colum blog-inner-container__image">
              <img
                :src="
                  require('@/assets/images/' +
                    post.headerContent[1].writerImage +
                    '.png')
                "
                loading="lazy"
                :alt="
                  'ez egy kis kép ' + post.headerContent[0].writerName + '-ról'
                "
              />
            </div>
            <div class="colum blog-inner-container__name-and-spec">
              <p>
                <strong>{{ post.headerContent[0].writerName }}</strong> -
                {{ post.headerContent[2].role }}
              </p>
              <p>{{ post.headerContent[3].subRole }}</p>
            </div>
            <div class="blog-inner-container__date">{{ post.date }}</div>
          </div>
        </div>
        <div class="blog-inner-container__body">
          <h1>{{ post.blogTitle }}</h1>
          <p class="blog-short-content">{{ post.blogShortContent }}</p>
          <div class="content-container" v-html="post.blogContent"></div>
        </div>
      </article>
      <div class="row article-socials-platforms">
        <div class="article-lables">
          <h2>Címkék</h2>
        </div>
        <div class="row article-socials">
          <h2>Megosztás</h2>
          <div class="facebook-icon">
            <a href="https://www.facebook.com/" target="_blank">
              <img
                src="@/assets/images/icons/facebook-icon.svg"
                alt="facebook megosztás"
                loading="lazy"
              />
            </a>
          </div>
          <div class="linkedin-icon">
            <a href="https://www.linkedin.com/" target="_blank">
              <img
                src="@/assets/images/icons/linkedin-icon.svg"
                alt="linkedin megosztás"
                loading="lazy"
              />
            </a>
          </div>
          <div class="twitter-icon">
            <a href="https://twitter.com/?lang=hu" target="_blank">
              <img
                src="@/assets/images/icons/twitter-icon.svg"
                alt="twitter megosztás"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: null,
    };
  },
  async mounted() {
    this.post = await this.$axios.$get(
      `http://localhost:3001/articles/${this.$route.params.id}`
    );
  },
  methods: {},
  // head() {
  //   return {
  //     titleTemplate: "%s - " + this.post.blogTitle,
  //     meta: [
  //       {
  //         property: "og:url",
  //         content: "http://localhost:3000/cikkek/" + this.post.blogSubtitle,
  //       },
  //       { property: "og:type", content: "article" },
  //       { property: "og:title", content: this.post.blogTitle },
  //       { property: "og:description", content: this.post.blogTitle },
  //     ],
  //   };
  // },
};
</script>

<style lang="scss">
.full-blog {
  background: white;
  box-shadow: 0 0 30px 0 rgba(23, 22, 22, 0.2);
  border-bottom: 6px solid #aa8961;
  margin: 30px auto 150px auto;
  padding: 60px 0;
  position: relative;
  width: 100%;
  max-width: 100%;
  @media (min-width: $lg-devices) {
    width: 960px;
  }

  @media (min-width: $xl-devices) {
    width: 1170px;
  }
  .blog-inner-container {
    padding: 0 20px;
    max-width: 810px;
    margin: 0 auto;
    border-bottom: 1px solid #e5e9eb;
    &__header {
      font-family: SourceSansPro;
      font-size: 14px;
    }
    &__image {
      margin-right: 10px;
      img {
        border-radius: 50%;
      }
    }
    &__name-and-spec {
      p {
        &:first-child {
          margin-bottom: 5px;
        }
      }
    }
    &__date {
      margin-left: auto;
    }
    &__body {
      h1 {
        font-family: PlayFairDisplay;
        font-size: 40px;
        color: #aa8961;
        margin: 20px 0 30px;
        font-weight: 700;
        line-height: 1.1;
      }
      h3 {
        font-size: 26px;
        font-weight: 700;
        margin: 25px 0 40px;
        font-family: SourceSansPro;
      }
      .blog-short-content {
        font-size: 26px;
        color: #323232;
        margin: 0 0 30px;
        line-height: 1.4;
        font-family: SourceSanspro;
      }
      .content-container {
        p {
          font-size: 20px;
          color: #323232;
          margin: 0 0 30px;
          line-height: 1.4;
          text-align: justify;
          font-family: SourceSanspro;
        }
        img {
          display: block;
          width: 100%;
          box-sizing: border-box;
          margin: 30px auto;
        }
        a {
          color: #aa8961;
          &:hover {
            background: #aa8961;
            color: black;
          }
        }
      }
    }
  }
  .article-socials-platforms {
    padding: 0 20px;
    max-width: 810px;
    margin: 30px auto;
    align-items: center;
    h2 {
      font-family: PlayFairDisplay;
      font-size: 24px;
      font-weight: 400;
      color: #323232;
    }
    .article-socials {
      align-items: center;
      h2 {
        margin-right: 20px;
      }
      .facebook-icon {
        width: 38px;
        height: 38px;
        margin-right: 20px;
      }
      .linkedin-icon {
        width: 38px;
        height: 38px;
        margin-right: 20px;
      }
      .twitter-icon {
        width: 38px;
        height: 38px;
      }
    }
    .article-lables {
      margin-right: auto;
    }
  }
}
</style>