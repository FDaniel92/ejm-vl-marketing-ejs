<template>
  <div class="ej-labels">
    <h2>Címkék</h2>
    <hr />
    <div class="ej-labels__items">
      <div class="ej-labels__item">
        <p>CMT</p>
      </div>
      <div class="ej-labels__item">
        <p>desi</p>
      </div>
      <div class="ej-labels__item">
        <p>digitalizáció</p>
      </div>
      <div class="ej-labels__item">
        <p>Drávusz Rita</p>
      </div>
      <div class="ej-labels__item">
        <p>KR</p>
      </div>
      <div class="ej-labels__item">
        <p>Mile ügyvédi iroda</p>
      </div>
      <div class="ej-labels__item">
        <p>Obr</p>
      </div>
      <div class="ej-labels__item">
        <p>Wonderflóra</p>
      </div>
      <div class="ej-labels__item">
        <p>CMT</p>
      </div>
      <div class="ej-labels__item">
        <p>desi</p>
      </div>
      <div class="ej-labels__item">
        <p>digitalizáció</p>
      </div>
      <div class="ej-labels__item">
        <p>Drávusz Rita</p>
      </div>
      <div class="ej-labels__item">
        <p>KR</p>
      </div>
      <div class="ej-labels__item">
        <p>Mile ügyvédi iroda</p>
      </div>
      <div class="ej-labels__item">
        <p>Obr</p>
      </div>
      <div class="ej-labels__item">
        <p>Wonderflóra</p>
      </div>
      <div class="ej-labels__item">
        <p>CMT</p>
      </div>
      <div class="ej-labels__item">
        <p>desi</p>
      </div>
      <div class="ej-labels__item">
        <p>digitalizáció</p>
      </div>
      <div class="ej-labels__item">
        <p>Drávusz Rita</p>
      </div>
      <div class="ej-labels__item">
        <p>KR</p>
      </div>
      <div class="ej-labels__item">
        <p>Mile ügyvédi iroda</p>
      </div>
      <div class="ej-labels__item">
        <p>Obr</p>
      </div>
      <div class="ej-labels__item">
        <p>Wonderflóra</p>
      </div>
      <div class="ej-labels__item">
        <p>CMT</p>
      </div>
      <div class="ej-labels__item">
        <p>desi</p>
      </div>
      <div class="ej-labels__item">
        <p>digitalizáció</p>
      </div>
      <div class="ej-labels__item">
        <p>Drávusz Rita</p>
      </div>
      <div class="ej-labels__item">
        <p>KR</p>
      </div>
      <div class="ej-labels__item">
        <p>Mile ügyvédi iroda</p>
      </div>
      <div class="ej-labels__item">
        <p>Obr</p>
      </div>
      <div class="ej-labels__item">
        <p>Wonderflóra</p>
      </div>
      <div class="ej-labels__item">
        <p>CMT</p>
      </div>
      <div class="ej-labels__item">
        <p>desi</p>
      </div>
      <div class="ej-labels__item">
        <p>digitalizáció</p>
      </div>
      <div class="ej-labels__item">
        <p>Drávusz Rita</p>
      </div>
      <div class="ej-labels__item">
        <p>KR</p>
      </div>
      <div class="ej-labels__item">
        <p>Mile ügyvédi iroda</p>
      </div>
      <div class="ej-labels__item">
        <p>Obr</p>
      </div>
      <div class="ej-labels__item">
        <p>Wonderflóra</p>
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
.ej-labels {
  background: $color-1;
  padding: 20px;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  box-sizing: border-box;
  @media (min-width: $lg-devices) {
    width: 360px;
    max-width: 360px;
    min-width: 360px;
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
    flex-direction: row;
    flex-wrap: wrap;
  }
  &__item {
    border: 1px solid #d6d6d6;
    font-family: $sourceSansProRegular;
    font-size: 12px;
    padding: 5px 10px;
    margin: 0 10px 10px 0;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background: $color-3;
      border: 1px solid $color-3;
      color: white;
    }
  }
}
</style>