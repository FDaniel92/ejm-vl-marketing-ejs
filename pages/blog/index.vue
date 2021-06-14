<template>
  <div id="blog">
    <div class="container-fluid blog-maintitle">
      <div class="container">
        <h2>Blog</h2>
      </div>
    </div>

    <div class="container-fluid blog-content">
      <div class="container md-column row">
        <div class="column blog-content__left-side">
          <div class="blog-slider">
            <ej-blog-carousel></ej-blog-carousel>
          </div>
          <div class="blog-posts">
            <ej-post-container></ej-post-container>
          </div>
        </div>

        <div class="column blog-content__right-side">
          <div class="labels">
            <ej-labels></ej-labels>
          </div>
          <div class="social-pages">
            <ej-socialpages></ej-socialpages>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
};
</script>

<style lang="scss">
.blog-maintitle {
  position: relative;
  margin: 0 0 20px 0;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 50%;
    background: $color-2;
    z-index: -1;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 40%;
    height: 100%;
    background: $color-5;
    z-index: -1;
  }
  .container {
    background: $color-5;
    h2 {
      color: $color-1;
      font-family: $sourceSansProRegular;
      padding: 12px 20px;
      font-size: 23px;
      text-transform: uppercase;
      @media (min-width: $lg-devices) {
        padding: 12px 0;
      }
    }
  }
}
</style>