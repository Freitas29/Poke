<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
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
    background-repeat: no-repeat;
    background-size: auto;
}

body{
  background: #355C7D;
    background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);
    background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);

}

*{
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #2f3542;
  text-decoration: none;
}
</style>
