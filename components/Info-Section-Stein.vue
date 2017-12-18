<template>
  <div class="info-section-stein">
    <h3 class="sigle">{{ getSigleStein}}</h3>
    <h1 class="titel">{{ getTitelStein }}</h1>
    <div class="trans">{{ getTransStein }}</div>
    <div class="trans-lat">{{ getBackstein.transLatStein}}</div>
    <div class="text">{{ getTextStein }}</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getBackstein',
      'getTitelStein',
      'getTextStein',
      'getTransStein',
      'getSigleStein'
    ])
  }
}
</script>
<style>
  .info-section-stein {
    position: relative;
    flex: 1;
    padding: 1rem;
  }
  .sigle {
    font-weight: 400;
    font-size: .9rem;
  }
  .titel {
    font-size: 1.2rem;
    margin-top: .2rem;
    margin-bottom: .4rem;
  }
  .trans {
    margin-bottom: .5rem;
    padding-left: 1rem;
    font-style: italic;
  }
  .trans-lat {
    margin-bottom: 1rem;
    padding-left: 1rem;
    font-style: normal;
    font-size: .8rem;
    color: #666;
  }
</style>
