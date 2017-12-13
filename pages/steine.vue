<template>
  <div class="wrapper">
    <media-display-steine />
    <controls-bar-steine />
    <info-section-steine />
  </div>
</template>

<script>
import ControlsBarSteine from '~/components/Controls-Bar-Steine.vue'
import MediaDisplaySteine from '~/components/Media-Display.vue'
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
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.container {

}
.illu {
  min-height: 50vh;
}
.info {
  min-height: 40vh;
}
</style>
