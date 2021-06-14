<template>
  <div class="carousel-wrapper">
    <slot name="carouseMainTitle"></slot>
    <div class="carousel-container">
      <div class="carousel row" ref="sliderContent">
        <slot name="carouselBlock"></slot>
      </div>

      <div class="carousel-control row justify-centered" ref="carouselControl">
        <div class="ej-bullet-control" ref="bulletContainer">
          <div
            class="bullet"
            v-bind:class="{ 'active': activeSlide - 1 === index }"
            v-for="index in getTheSlides"
            :key="index"
            :data-id="index + 1"
            ref="button"
            @click="getBullets(index)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ej-carousel",
  data() {
    return {
      activeSlide: 1,
      getTheSlides: [],
    };
  },
  mounted() {
    this.setTheBullets();
  },
  methods: {
    setTheBullets() {
      let carouselContainerLength = this.$refs.sliderContent.childNodes.length;
      for (let i = 0; i < carouselContainerLength; i++) {
        this.getTheSlides.push(i);
      }
    },
    getBullets(index) {
      this.activeSlide = this.$refs.button[index].dataset.id;
      this.translate(-(this.activeSlide - 1), 1);
    },
    translate(activeSlide, value) {
      this.$refs.sliderContent.style.transform =
        "translateX(" + activeSlide * (value * 100) + "%)";
    },
  },
};
</script>

<style lang="scss">
.carousel-wrapper {
  width: 100%;
  padding: 100px 0 200px 0;
  h2 {
    text-align: center;
    font-size: $font-extralarge;
    color: $color-3;
    padding: 50px 0;
    font-family: PlayFairDisplayBold;
  }
  .carousel-container {
    position: relative;
    width: 320px;
    margin: 20px auto 0 auto;
    overflow: hidden;
    @media (min-width: $lg-devices) {
      width: 900px;
    }
    @media (min-width: $xl-devices) {
      width: 1150px;
    }
    .carousel {
      transition: 0.5s ease-in-out;
      margin-bottom: 50px;
      &.rightslide {
        transform: translateX(-100%);
      }
      &.leftslide {
        transform: translateX(100%);
      }
      a {
        margin: 0 10px 10px 0;
        @media (min-width: $lg-devices) {
          margin: 0 20px 20px 0;
        }
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 72px;
          height: 30px;
          @media (min-width: $lg-devices) {
            width: 210px;
            height: 80px;
          }
          @media (min-width: $xl-devices) {
            width: 270px;
            height: 100px;
          }
        }
      }
    }
    .carousel-control {
      display: flex;
      flex-direction: row;
      justify-content: center;
      .ej-bullet-control {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0 20px;
        .bullet {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          transition: 0.24s ease-in-out;
          background: $color-5;
          border: 5px solid $color-5;
          cursor: pointer;
          &:nth-child(even) {
            margin: 0 15px;
          }
          &:last-child {
            margin-right: 0;
          }
          &.active {
            background: $color-3;
          }
        }
      }
    }
  }
}
</style>