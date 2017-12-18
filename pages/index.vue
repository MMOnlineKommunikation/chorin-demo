<template>
  <section class="container start">
    <div class="title">
      <h1>Sprechende Steine</h1>
      <h2>Ein Führer<br>zu den Inschriften an der<br>Choriner Klosterkirche</h2>
    </div>
    <div class="enter-button">
      Führung beginnen!
    </div>
  </section>
</template>

<script>

export default {
  components: {

  },
  layout: 'start'
}
</script>

<style>
  .container {
    background-color: transparent;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1.6rem;
  }
  .start h1 {
    font-size: 1.8rem;
    letter-spacing: .05rem;
    color: #A11823;
    margin-top: 6.6rem;
    margin-bottom: .6rem;
    text-transform: uppercase;
  }
  .start h2 {
    font-size: 1.4rem;
    color: #A11823;
  }
  .title {
    padding-bottom: 0rem; /*setzt den Titel aus der Mitte nach oben */
  }
  .enter-button {
    margin-top: 2.8rem;
    background-color: #A11823;
    color: #fff;
    padding: .8rem;
    border: 0px solid #333;
  }
  .links {
    padding-top: 15px;
  }
</style>
