<template>
  <div class="info-section">
    <div v-for="(backstein, index) in getBacksteine" class="marker" :style="positionMarker(index)"><i class="material-icons">crop_7_5</i></div>
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
    methods: {
      positionMarker (index) {
        const x = this.getBacksteine[index].planPos.x
        const y = this.getBacksteine[index].planPos.y
        let styleText = ''
        styleText += ' left: ' + x + 'px;'
        styleText += ' top: ' + y + 'px;'
        if (index === this.$store.state.steinIndex) {
          styleText += 'color: #D93600;'
        }
        return styleText
      }
    },
    computed: {
      ...mapGetters([
        'getBacksteine',
        'getPlanPos'
      ])
    },
    created () {

    }
  }
</script>
<style>
  .info-section {
    position: relative;
    flex: 1;
    background-image: url('/GR_01.jpg');
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .marker {
    position: absolute;
    color: #666;
    max-width: 24px;
  }
  .active {
    color: #D93600;
  }
</style>
