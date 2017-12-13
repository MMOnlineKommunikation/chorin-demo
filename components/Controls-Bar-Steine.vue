<template>
  <div class="controls-bar">
    <div class="controls-arrows">
      <span @click="$store.dispatch('changeSteinIndex', -1)"><i class="material-icons">keyboard_arrow_left</i></span>
      <nuxt-link to="/stein">zu diesem Stein</nuxt-link>
      <span @click="$store.dispatch('changeSteinIndex', 1)"><i class="material-icons">keyboard_arrow_right</i></span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([

    ])
  }
}
</script>
<style>
  .controls-bar {
    background-color: #666;
    color: #eee;
    padding: 8px;
  }
</style>
