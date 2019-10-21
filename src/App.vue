<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, html{
    height: 100%;
    background-color: #f1f2f6;
    background-image: url("./assets/pokemon-ultra-sun-and-ultra-moon-p8-1920x1080.jpg");
    background-repeat: no-repeat;
    background-size: auto;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #2f3542;
}
</style>
