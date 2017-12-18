<template>
  <div class="wrapper">
    <media-display-steine />
    <controls-bar-steine />
    <info-section-steine />
  </div>
</template>

<script>
import ControlsBarSteine from '~/components/Controls-Bar-Steine.vue'
import MediaDisplaySteine from '~/components/Media-Display-Steine.vue'
import InfoSectionSteine from '~/components/Info-Section-Steine.vue'

export default {
  components: {
    ControlsBarSteine,
    MediaDisplaySteine,
    InfoSectionSteine
  }
}
</script>

<style scoped>
.wrapper {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
