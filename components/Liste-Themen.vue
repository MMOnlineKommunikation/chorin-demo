<template>
  <div class="liste-themen">
    <h2>Themen</h2>
    <div v-for="(thema, index) in getThemen" class="card">
      <h3 @click="$store.dispatch('changeThema', index)">{{ getThemaId(index).themaTitel }}</h3>
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
    padding: 1rem 1rem 0 1rem;
  }
  .card {
    margin: .6rem 0;
    border: 1px solid #333;
    padding: .8rem;
    cursor: pointer;
  }
  h2 {
    font-size: 1.2rem;
    margin-top: .0rem;
    margin-bottom: .8rem;
  }
  h3 {
    font-size: .85rem;
    font-weight: 400;
  }
  .liste-themen div:nth-of-type(1) {
    background-color: #A11823;
    color: #fff;
  }
</style>
