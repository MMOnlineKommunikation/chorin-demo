<template>
  <div class="media-display">
    <div class="img-container">
      <img :src="getDetailStein" class="stein-detail">
      <i class="material-icons zoom">zoom_in</i>
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
 .zoom {
   display: block;
   position: absolute;
   bottom: 4px;
   right: 4px;
   font-size: 1.8rem;
 }
 .stein-detail {
   border: 2px solid #fff;
 }

</style>
