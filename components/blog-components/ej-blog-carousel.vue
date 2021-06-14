<template>
  <div class="carousel">
    <div class="carousel__container">
      <div
        v-for="(post, index) in blogsCarousel"
        :key="index"
        class="carousel__block-wrapper fade"
        ref="blogCarouselItem"
      >
        <div class="carousel__block">
          <div v-html="post.blogCarouselImage"></div>
          <div class="carousel__block-content">
            <nuxt-link :to="`/cikkek/${post.id}`">
              <h2>{{ post.blogTitle }}</h2>
              <p>{{ post.blogShortContent | truncate(200) }}</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="carousel__bullets" ref="dots">
      <div class="bullet" @click="currentSlide(1)"></div>
      <div class="bullet" @click="currentSlide(2)"></div>
      <div class="bullet" @click="currentSlide(3)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ej-blog-carousel",
  //A FILTERS-en belüli metódussal/metódusokkal tudunk szövegeket formázni
  filters: {
    //truncate a metódus neve, aminek ebben az esetben két paramétere van (a "string" maga az adott szöveg amin alkalmazon a filtert, a "value" pedig az a karakterszám amit megadok maximumnak.)
    truncate(string, value) {
      //if elágazással megvizsgálom hogy maga a szöveg egyáltalán létezik-e illetve a szöveg hossza kisebb egyenlő-e a paraméterként megadott számmal, ha igen visszatér a szöveggel.
      if (string && string.length <= value) return string;
      //Ha a fenti "if" elágazásban foglaltak nem teljesülnek akkor hajtódik végre ez a sor: itt azt mondjuk, hogy visszatér a szöveg értékével amit a "substring" metódus paramétereivel meghatározunk (0-karaktertől indítunk a megadott számig) majd hozzáfűzzük a "..."
      return (string || "").substring(0, value) + "...";
    },
  },
  //Ez a "data" függvény ami egy objektummal tér vissza.
  data() {
    return {
      blogsCarousel: null,
      slideIndex: 1,
    };
  },
  async fetch() {
    this.blogsCarousel = await fetch(
      "http://localhost:3001/articles"
    ).then((res) => res.json());
  },
  mounted() {
    setTimeout(() => this.showSlides(this.slideIndex), 100);
  },
  //A "methods"-on belül találhatóak az elkészített metódusok
  methods: {
    //currentSlide nevű függvény egy paraméterrel (n).
    currentSlide(n) {
      //A showsSlides nevű metódust hívom meg
      this.showSlides((this.slideIndex = n));
    },
    //A showSlides nevű metódus egy paraméterrel (n).
    showSlides(n) {
      let i;
      let slides = this.$refs.blogCarouselItem;
      let dots = this.$refs.dots.children;
      if (this.slideIndex > slides.length) {
        this.slideIndex = 1;
      }

      if (n > slides.length) {
        this.slideIndex = 1;
      }

      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", " ");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
  },
};
</script>

<style lang="scss">
.carousel {
  position: relative;
  &__container {
    width: 100%;
    position: relative;
  }
  &__block-wrapper {
    position: relative;
    height: 400px;
    top: 0;
    left: 0;
    display: none;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      background-image: linear-gradient(180deg, rgba(255, 0, 0, 0), #000);
      height: 150px;
      width: 100%;
      z-index: 0;
    }
    &.fade {
      -webkit-animation-name: fade;
      -webkit-animation-duration: 1.5s;
      animation-name: fade;
      animation-duration: 1.5s;
    }

    @-webkit-keyframes fade {
      from {
        opacity: 0.4;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fade {
      from {
        opacity: 0.4;
      }
      to {
        opacity: 1;
      }
    }
  }
  &__block {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    background-size: cover;
    background-repeat: no-repeat;

    img {
      width: 100%;
      height: auto;
    }
  }
  &__block-content {
    position: absolute;
    bottom: 30px;
    left: 40px;
    right: 40px;
    font-family: $sourceSansProSemibold;
    font-size: 2.57rem;
    z-index: 2;
    cursor: pointer;
    &:hover h2 {
      color: $color-3;
    }
    &:hover p {
      color: $color-3;
    }
    a {
      text-decoration: none;
    }
    h2 {
      font-size: 2.57rem;
      color: $color-1;
    }
    p {
      margin-top: 10px;
      font-size: 18px;
      color: $color-1;
      line-height: 1.4;
      font-family: SourceSansPro;
    }
  }
  &__bullets {
    position: absolute;
    top: 40px;
    left: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 85%;
    .bullet {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(192, 192, 192, 1);
      margin-right: 10px;
      cursor: pointer;
      &.active {
        background: white;
        border: 3px solid rgba(192, 192, 192, 0.8);
      }
    }
  }
}
</style>