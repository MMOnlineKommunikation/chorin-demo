<template>
  <div class="wrapper">
    <abstract-themen />
    <controls-bar-themen />
    <liste-themen />
  </div>
</template>

<script>
import ControlsBarThemen from '~/components/Controls-Bar-Themen.vue'
import AbstractThemen from '~/components/Abstract-Themen.vue'
import ListeThemen from '~/components/Liste-Themen.vue'

export default {
  components: {
    ControlsBarThemen,
    AbstractThemen,
    ListeThemen
  }
}
</script>

<style scoped>
  .wrapper {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
</style>
