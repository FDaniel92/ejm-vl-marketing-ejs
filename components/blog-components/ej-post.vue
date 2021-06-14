<template>
  <div class="post-pre">
    <div class="ej-post-head row">
      <div class="column">
        <div class="row">
          <div class="column">
            <img
              :src="require('@/assets/images/'+post.headerContent[1].writerImage+'.png')"
              loading="lazy"
              :alt="'ez egy kis kép ' + post.headerContent[0].writerName + '-ról'"
            />
          </div>

          <div class="column align-center">
            <p>
              <strong>{{ post.headerContent[0].writerName }}</strong>
              - {{ post.headerContent[3].subRole }}
            </p>
            <p class="black-font">{{ post.headerContent[2].role }}</p>
          </div>
        </div>
      </div>
      <div class="column">
        <p class="black-font">{{ post.date }}</p>
      </div>
    </div>
    <nuxt-link :to="`/cikkek/${post.id}`" class="post-pre__maintitle">
      {{ post.blogTitle | truncate(250) }}
    </nuxt-link>
    <div class="post-pre__paragraph">
      <p>{{ post.blogShortContent | truncate(250) }}</p>
      <nuxt-link :to="`/cikkek/${post.id}`">Tovább</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  filters: {
    truncate(string, value) {
      if (string && string.length <= value) return string;
      return (string || "").substring(0, value) + "...";
    },
  },
};
</script>

<style lang="scss">
.ej-post-head {
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    font-size: 14px;
    font-family: SourceSansPro;
    color: $color-3;
    margin-left: 12px;
    margin-bottom: 5px;
    &.black-font {
      color: #323232;
      margin-bottom: 0;
    }
  }
  img {
    border-radius: 50%;
  }
}
.post-pre {
  padding: 0 20px 20px 20px;
  @media (min-width: $lg-devices) {
    padding: 0 70px 20px 70px;
  }
  &__maintitle {
    font-family: $sourceSansProSemibold;
    font-size: 26px;
    color: $color-3;
    text-decoration: none;
    &:hover {
      color: #323232;
    }
  }

  &__paragraph {
    font-family: $sourceSansProRegular;
    font-size: 18px;
    color: #323232;
    margin: 20px 0 20px;
    line-height: 1.4;
    padding-bottom: 30px;
    border-bottom: 1px solid #d6d6d6;
    a {
      font-size: 18px;
      color: $color-3;
    }
  }
}
</style>