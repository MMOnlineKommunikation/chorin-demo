<template>
  <div class="controls-bar">
    <div class="cb-corpus">
      <span  class="cb-element"@click="$store.dispatch('changeSteinIndex', -1)"><i class="material-icons">keyboard_arrow_left</i></span>
      <nuxt-link class="cb-element" to="/steine">
        <div class="cb-button">
          <img src="/backstein_ansehen.png" class="cb-button-element"/>
          <span class="cb-button-element btn-text">Stein auswählen</span>
        </div>
      </nuxt-link>
      <span class="cb-element" @click="$store.dispatch('changeSteinIndex', 1)"><i class="material-icons">keyboard_arrow_right</i></span>
    </div><!-- .cb-corpus -->
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
<style scoped>
  .controls-bar {
    padding-bottom: .4rem;
  }
  .cb-corpus {
    display: flex;
    justify-content: space-between;
    padding: .4rem;
    background-color: #7C8994;
    color: #eee;
    box-shadow: 0px 4px 4px 0px rgba(50, 50, 50, 0.4);
  }
  a,
  a:link,
  a:visited,
  a:hover,
  a:focus {
    text-decoration: none;
    color: #000;
    font-size: .92rem;
    text-transform: uppercase;
  }
  .cb-element img {
    max-height: 1.2rem;
    margin-right: .4rem;
    margin-top: .12rem;
  }
  .cb-button {
    display: flex;
    justify-content: space-between;
    margin-top: .1rem;
  }
  .cb-button-element {
    display: block;
  }
  .btn-text {
    display: block;
    margin-top: .2rem;
  }
</style>
