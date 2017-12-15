<template>
  <div class="wrapper">
    <abstract-themen />
    <controls-bar-steine />
    <liste-themen />
  </div>
</template>

<script>
import ControlsBarSteine from '~/components/Controls-Bar-Steine.vue'
import AbstractThemen from '~/components/Abstract-Themen.vue'
import ListeThemen from '~/components/Liste-Themen.vue'

export default {
  components: {
    ControlsBarSteine,
    AbstractThemen,
    ListeThemen
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
</style>
