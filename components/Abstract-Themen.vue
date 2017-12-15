<template>
  <div class="abstract-themen">
      <h1>{{ getThemaId(0).themaTitel }}</h1>
      <div>{{ getThemaId(0).themaAbstract }}</div>
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
        'getThemaId',
        'getThemaIndex'
      ])
    }
  }
</script>
<style>
 .abstract-themen {
   flex: 1;
 }
</style>
