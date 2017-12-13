<template>
  <div class="wrapper">
    <media-display-stein />
    <controls-bar-stein />
    <info-section-stein />
  </div>
</template>

<script>
import ControlsBarStein from '~/components/Controls-Bar-Stein.vue'
import MediaDisplayStein from '~/components/Media-Display-Stein.vue'
import InfoSectionStein from '~/components/Info-Section-Stein.vue'

export default {
  components: {
    ControlsBarStein,
    MediaDisplayStein,
    InfoSectionStein
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
