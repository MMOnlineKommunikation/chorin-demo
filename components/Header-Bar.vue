<template>
  <div class="header-bar">
    <div class="rubrik">{{getThemaId(0).themaTitel}}</div>
    <div class="hb-nav"><i class="material-icons">menu</i></div>
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
        'getThemaId'
      ])
    }
  }
</script>

<style scoped>
  .header-bar {
    background-color: #333;
    color: #eee;
    padding: 4px;
    display: flex;
    justify-content: flex-end;
  }
  .rubrik {
    flex: 1;
    text-align: center;
    font-size: .9rem;
    padding: 4px 0 0 18px;
  }
  .hb-nav {
    color: #ccc;
  }
</style>
