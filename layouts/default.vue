<template>
  <div id="app">
    <div class="container-fluid right-red-layout">
      <ej-navigation></ej-navigation>
    </div>

    <Nuxt />

    <section class="container-fluid connect">
      <div class="md-column row container connect__content">
        <div class="column connect-first-block">
          <p class="connect-heading">Kapcsolat</p>
          <p><strong>e-Jogsegéd Szolgáltató Kft.</strong></p>
          <p>Székhely: 1135 Budapest, Kisgömb utca 6/1</p>
          <p>Adószám: 22670357-2-41</p>
          <p>Cégjegyzékszám: 01-09-938288</p>
          <p>Bankszámlaszám: OTP Bank 11702036-20719690</p>
          <a href="https://www.facebook.com/ejogseged/" target="_blank">
            <img src="~@/assets/images/facebook_red.svg" alt="facebook logó" loading="lazy" />
          </a>
        </div>
        <div class="sm-column row">
          <div class="column connect__block">
            <p>IFJ. LENGYEL TIBOR</p>
            <p>ügyvezető igazgató</p>
            <hr />
            <p>06 30/933-8083</p>
            <p>ifj.lengyel@ejogseged.hu</p>
          </div>
          <div class="column connect__block">
            <p>VÁRNAI SOMA</p>
            <p>
              operatív igazgató,
              <br />adatvédelmi tisztviselő
            </p>
            <hr />
            <p>06 30/317-7239</p>
            <p>varnai.soma@ejogseged.hu</p>
          </div>
          <div class="column connect__block">
            <p>HELPDESK</p>
            <p></p>
            <hr />
            <p>06 1/550-7810</p>
            <p>info@ejogseged.hu</p>
          </div>
        </div>
      </div>
    </section>

    <GMap
      :center="{ lat: 47.52657, lng: 19.08181 }"
      :zoom="17"
      style="height: 555px"
      :options="gmapOptions"
    >
      <GMapMarker
        :position="{ lat: 47.52657, lng: 19.08181 }"
        @click="markerClick()"
      ></GMapMarker>
    </GMap>
    <ej-cookie>
      <p slot="cookieParagraph">
        Weboldalunkon
        <a href="/Suti_Szabalyzat_ECK_EHK_JBK_EJS_01.pdf" target="_blank"
          >sütiket</a
        >
        (cookie) használunk, hogy biztonságos böngészés mellett a legjobb
        felhasználói élményt nyújthassuk. A honlap további böngészésével
        hozzájárul a sütik használatához.
        <a href="/Adatvedelmi_Tajekoztato_JBK_02.pdf" target="_blank"
          >Adatvédelmi tájékoztatónkban</a
        >
        megtalálja, hogyan gondoskodunk adatai védelméről.
      </p>
    </ej-cookie>
    <ej-footer></ej-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gmapOptions: {
        disableDefaultUI: true,
        mapTypeControlOptions: {
          mapTypeIds: [
            "roadmap",
            "satellite",
            "hybrid",
            "terrain",
            "styled_map",
          ],
        },
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
              {
                saturation: 36,
              },
              {
                color: "#000000",
              },
              {
                lightness: 40,
              },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              {
                visibility: "on",
              },
              {
                color: "#000000",
              },
              {
                lightness: 16,
              },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 20,
              },
            ],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 17,
              },
              {
                weight: 1.2,
              },
            ],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 20,
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 21,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 17,
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 29,
              },
              {
                weight: 0.2,
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 18,
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 16,
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 19,
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 17,
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    markerClick() {
      window.open("https://goo.gl/maps/rH5dYJjMLHT2");
    },
  },
};
</script>

<style lang="scss">
.GMap__Wrapper {
  height: 555px !important;
}
</style>
