<template>
  <div class="main">
    <div class="actions">
      <Input v-model="name" v-on:keyup.enter="search"/>
    </div>
    <div class="content">
      <Card
      v-if="pokemon"
      v-bind:image="pokemon.sprites.front_default"
      v-bind:name="pokemon.name"
      v-bind:genders="pokemon.types"
     />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import axios from 'axios'
import Input from '../components/Input'

export default {
  name: 'Main',
  components: {
      Card,
      Input
  },
  data(){
        return { 
            pokemon: null,
            name: '',
        }
    },
    computed: {
      nameLowerCase: function(){
        return this.name.toLowerCase()
      }
    },
    methods: {
      search: async function(){
        try{
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.nameLowerCase}/`)
          this.pokemon = response.data
        }catch(e){
            alert(e)
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
    padding: 5% 5%;
    grid-gap: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.main .actions{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content{
  margin-top: 2%;
  width: 30%;
}

</style>
