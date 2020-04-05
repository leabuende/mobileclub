<template>
  <div id="app">
    <Accueil class=Accueil></Accueil>
  </div>
</template>

<script>

import Accueil from './components/Accueil.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'App',
  components: {
    Accueil,
   // Products,
   // Questions
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
}
.Accueil{
  width:100%;
}

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    
    
}
</style>
