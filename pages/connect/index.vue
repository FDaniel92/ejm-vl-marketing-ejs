<template>
  <div id="connect">
    <section class="container-fluid connect-form">
      <div class="container connect-form__container md-column row">
        <div class="connect-form__content">
          <h2>
            e-Jogsegéd <br />
            szakmai segítséget nyújt <br />
            Önnek is!
          </h2>
          <p>
            Írjon nekünk, keressen minket bizalommal! Munkatársaink készséggel
            állnak rendelkezésére, hogy segítséget nyújtsanak elektronikusan
            intézhető hivatalos ügyeinek kezelésében.
          </p>
          <hr />
        </div>
        <div class="connect-form__form">
          <h2>Kérdése van?</h2>
          <form @submit.prevent="sendMessage" method="post" class="column">
            <input type="text" name="name" v-model="message.clientName" placeholder="Név" required />
            <input type="email" name="email" v-model="message.email" placeholder="E-mail cím" required />
            <textarea placeholder="Üzenet" name="textarea" v-model="message.body" required></textarea>
            <input type="submit" value="Elküld" placeholder="Név" />
          </form>
        </div>
      </div>
    </section>

    <section
      class="container hide-lg row relative ej-product-box-wrapper ej-product-box-wrapper--connect"
      id="services"
    >
      <div class="ej-product-box">
        <div class="ej-product-box__wrapper">
          <img
            class="ej-product-box__image"
            src="~@/assets/images/JBK_logo.svg"
            alt="JBK logó"
            loading="lazy"
          />
          <div class="ej-product-box__content">
            <p>
              Jogi Behajtási Keretrendszer a behajtási és peres ügyeinek teljes
              körű menedzsmentjéhez, kommunikációjához és riportálásához.
            </p>
            <a href="https://www.jbk.hu/" target="_blank">Bővebben</a>
          </div>
          <hr />
          <p class="ej-product-box__name">
            JOGI
            <br />BEHAJTÁSI <br />KERETRENDSZER
          </p>
        </div>
      </div>

      <div class="ej-product-box">
        <div class="ej-product-box__wrapper">
          <img
            class="ej-product-box__image"
            src="~@/assets/images/JBK_Light_logo.svg"
            alt="JBK Light logó"
            loading="lazy"
          />
          <div class="ej-product-box__content">
            <p>
              A JBK Light rendszere a MOKK-kal és a végrehajtókkal való gyors,
              átlátható kommunikációhoz nyújt támogatást.
            </p>
            <a href="https://www.jbklight.hu/" target="_blank">Bővebben</a>
          </div>
          <hr />
          <p class="ej-product-box__name">
            VÉGREHAJTÓKKAL VALÓ
            <br />ELEKTRONIKUS <br />KAPCSOLATTARTÁS
          </p>
        </div>
      </div>

      <div class="ej-product-box">
        <div class="ej-product-box__wrapper">
          <img
            class="ej-product-box__image"
            src="~@/assets/images/EHK_logo.svg"
            alt="EHK logó"
            loading="lazy"
          />
          <div class="ej-product-box__content">
            <p>
              A hivatali kapu tárhelyen keresztül hitelesített és tértivevényes
              elektronikus üzenetek küldhetőek az ügyfélkapu és cégkapu
              fiókokba. A rendszer összeköthető a saját ügyviteli rendszerrel,
              így a kommunikáció automatizálttá tehető.
            </p>
            <a href="https://www.e-hivatalikapu.hu/" target="_blank"
              >Bővebben</a
            >
          </div>
          <hr />
          <p class="ej-product-box__name">
            ÜGYINTÉZÉS
            <br />HIVATALI KAPUN <br />KERESZTÜL
          </p>
        </div>
      </div>

      <div class="ej-product-box">
        <div class="ej-product-box__wrapper">
          <img
            class="ej-product-box__image"
            src="~@/assets/images/ECK_logo.svg"
            alt="ECK logó"
            loading="lazy"
          />
          <div class="ej-product-box__content">
            <p>
              A cégkapun keresztül intézendő hivatalos ügyek gyors, egyszerű és
              biztonságos kommunikációja. Tömeges üzenetkezelés, beépített
              nyomtatványtár, több cégkapu fiók kezelése párhuzamosan.
            </p>
            <a href="https://www.e-cegkapu.hu/" target="_blank">Bővebben</a>
          </div>
          <hr />
          <p class="ej-product-box__name">
            INTELLIGENS
            <br />CÉGKAPUKEZELÉSI <br />MEGOLDÁSOK
          </p>
        </div>
      </div>
    </section>

    <section class="mobile-services mobile-services--connect" id="services">
      <div class="column">
        <div class="xs-column row">
          <div class="mobile-ej-product-box">
            <div class="mobile-ej-product-box__wrapper">
              <div class="row">
                <img
                  class="mobile-ej-product-box__image"
                  src="~@/assets/images/JBK_logo.svg"
                  alt="JBK logó"
                  loading="lazy"
                />
                <a href="https://www.jbk.hu/" target="_blank">Bővebben</a>
              </div>
              <hr />
              <p class="mobile-ej-product-box__name">
                JOGI
                <br />BEHAJTÁSI <br />KERETRENDSZER
              </p>
            </div>
          </div>
          <div class="mobile-ej-product-box">
            <div class="mobile-ej-product-box__wrapper">
              <div class="row">
                <img
                  class="mobile-ej-product-box__image"
                  src="~@/assets/images/JBK_Light_logo.svg"
                  alt="JBK Light logó"
                  loading="lazy"
                />
                <a href="https://www.jbk.hu/" target="_blank">Bővebben</a>
              </div>
              <hr />
              <p class="mobile-ej-product-box__name">
                VÉGREHAJTÓKKAL VALÓ
                <br />ELEKTRONIKUS <br />KAPCSOLATTARTÁS
              </p>
            </div>
          </div>
        </div>
        <div class="xs-column row">
          <div class="mobile-ej-product-box">
            <div class="mobile-ej-product-box__wrapper">
              <div class="row">
                <img
                  class="mobile-ej-product-box__image"
                  src="~@/assets/images/EHK_logo.svg"
                  alt="EHK logó"
                  loading="lazy"
                />
                <a href="https://www.jbk.hu/" target="_blank">Bővebben</a>
              </div>
              <hr />
              <p class="mobile-ej-product-box__name">
                ÜGYINTÉZÉS
                <br />HIVATALI KAPUN <br />KERESZTÜL
              </p>
            </div>
          </div>
          <div class="mobile-ej-product-box">
            <div class="mobile-ej-product-box__wrapper">
              <div class="row">
                <img
                  class="mobile-ej-product-box__image"
                  src="~@/assets/images/ECK_logo.svg"
                  alt="ECK logó"
                  loading="lazy"
                />
                <a href="https://www.jbk.hu/" target="_blank">Bővebben</a>
              </div>
              <hr />
              <p class="mobile-ej-product-box__name">
                INTELLIGENS
                <br />CÉGKAPUKEZELÉSI <br />MEGOLDÁSOK
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        clientName: "",
        email: "",
        body: "",
        sourceSystem: "TST-EJS",
      }
    };
  },
  methods: {
    sendMessage() {
      this.$axios.post(this.message).then(({ data }) => {
        for (let key in this.message) this.message[key] = null;
      });
    },
  },
};
</script>

<style lang="scss">
.ej-product-box-wrapper {
  &--connect {
    margin: 100px auto 120px auto !important;
  }
}
</style>