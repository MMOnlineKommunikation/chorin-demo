<template>
  <div class="abstract-themen">
      <h1 class="h-thema">{{ getThema.themaTitel }}</h1>
      <div>{{ getThema.themaAbstract }}</div>
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
        'getThemaIndex',
        'getThema'
      ])
    }
  }
</script>
<style>
 .abstract-themen {
   flex: 1;
   padding: 1rem;
 }
 .h-thema {
   color: #A11823;
   font-size: 1.6rem;
   margin-bottom: 1rem;
 }
</style>
