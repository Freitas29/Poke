<template>
  <div class="main">
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 5% 5%;
    grid-gap: 1%;
}
</style>
