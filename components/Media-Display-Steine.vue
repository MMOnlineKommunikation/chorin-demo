<template>
  <div class="media-display" :style="getMediaDisplayBG">
      <img :src="getMessbild" class="stein-lage">
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
        'getMediaDisplayBG',
        'getMessbild',
        'getDetailStein'
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
   border-left: 1px solid #fff;
   border-right: 1px solid #fff;
 }

</style>
