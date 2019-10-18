<template>
  <div class="main">
    <Card
    image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    name="Charizard"
    gender="Fogo"
     />
  </div>
</template>

<script>
import Card from '../components/Card'

export default {
  name: 'Main',
  components: {
      Card
  }
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
