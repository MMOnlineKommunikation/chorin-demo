<template>
  <div class="layout-start">
    <logo-leiste />
    <nuxt/>
    <foerder-logos />
  </div>
</template>

<script>
  import LogoLeiste from '~/components/Logo-Leiste.vue'
  import FoerderLogos from '~/components/Foerder-Logos.vue'

  export default {
    components: {
      LogoLeiste,
      FoerderLogos
    }
  }
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.layout-start {
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  background-image: url('/Start_BG.jpg');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
</style>
