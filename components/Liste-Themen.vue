<template>
  <div class="liste-themen">
    <h2>Themen</h2>
    <div v-for="(thema, index) in getThemen" class="card">
      <h3>{{ getThemaId(index).themaTitel }}</h3>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getThemen',
      'getThemaId',
      'getThemaIndex'
    ])
  }
}
</script>
<style scoped>
  .liste-themen {
    position: relative;
    flex: 1;
  }
  .card {
    margin: 1rem;
    border: 2px solid #333;
    padding: 1rem;
  }
  h2 {
    font-size: 1rem;
  }
  h3 {
    font-size: .85rem;
    font-weight: 400;
  }
</style>
