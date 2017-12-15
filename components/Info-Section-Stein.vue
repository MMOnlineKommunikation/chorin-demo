<template>
  <div class="info-section-stein">
    <h1>{{ getTitelStein }}</h1>
    <div>{{ getTextStein }}</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getTitelStein',
      'getTextStein'
    ])
  }
}
</script>
<style>
.info-section-stein {
  position: relative;
  flex: 1;
}
</style>
