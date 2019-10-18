<template>
  <div id="app">
    <Header/>
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
  background-color: #d1d8e0;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #d1d8e0;
}
</style>
