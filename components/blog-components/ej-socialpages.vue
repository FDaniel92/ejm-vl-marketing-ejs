<template>
  <div class="ej-socialpages">
    <h2>Közösségi oldalaink</h2>
    <hr />
    <div class="ej-socialpages__items">
      <div class="ej-socialpages__item">
        <iframe
          data-v-6ba7b257=""
          data-v-b649dac2=""
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fejogseged&amp;tabs&amp;height=214&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=249214249462874"
          width="350"
          height="130"
          scrolling="no"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          style="border: none; overflow: hidden"
        ></iframe>
      </div>
      <div class="ej-socialpages__item">
        <iframe
          data-v-6ba7b257=""
          data-v-b649dac2=""
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fecegkapu&amp;tabs&amp;height=214&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=249214249462874"
          width="350"
          height="150"
          scrolling="no"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          style="border: none; overflow: hidden"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ej-labels",
};
</script>

<style lang="scss">
.ej-socialpages {
  background: $color-1;
  padding: 20px 20px 0 20px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  @media (min-width: $lg-devices) {
    padding: 20px 10px 0 10px;
    width: 100%;
    max-width: 360px;
  }
  h2 {
    margin-bottom: 20px;
    white-space: nowrap;
    font-family: $playFairRegular;
    font-weight: 400;
    font-size: 24px;
    color: #323232;
  }
  hr {
    border-top: 2px solid $color-3;
    width: 70px;
    margin-bottom: 20px;
    margin-left: 0;
  }
  &__items {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
}
</style>