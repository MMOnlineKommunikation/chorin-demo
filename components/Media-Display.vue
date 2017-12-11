<template>
  <div class="media-display" :style="getMediaDisplayBG">
      <img v-if="$store.state.modus === 'auswahl'"  :src="$store.state.messbilder[$store.state.steinIndex]" class="stein-lage">
      <img v-if="$store.state.modus === 'detail'"  :src="$store.state.detailSteine[$store.state.steinIndex]" class="stein-lage">
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
        'getMediaDisplayBG'
      ])
    }
  }
</script>
<style>
 .media-display {
   flex: 1;
   position: relative;
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
 }
 .media-display img {
   position: absolute;
   max-width: 100%;
   max-height: 100%;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
 }
 .stein-lage {
   border: 2px solid #fff;
 }

</style>
