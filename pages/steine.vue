<template>
  <div class="wrapper">
    <media-display />
    <controls-bar />
    <info-section />
  </div>
</template>

<script>
import ControlsBar from '~/components/Controls-Bar.vue'
import MediaDisplay from '~/components/Media-Display.vue'
import InfoSection from '~/components/Info-Section.vue'

export default {
  components: {
    ControlsBar,
    MediaDisplay,
    InfoSection
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
