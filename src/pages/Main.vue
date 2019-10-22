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
      v-bind:id="pokemon.id"
     />
    </div>

    <div class="pokemon-list" v-if="pokemonList[0] !== undefined">
      
      <Card
        v-for="pokemon in pokemonDetails"
        v-bind:key="pokemon.id"
        v-bind:image="pokemon.sprites.front_default"
        v-bind:name="pokemon.name"
        v-bind:genders="pokemon.types"
        v-bind:id="pokemon.id"
      />
    </div>

    <div class="pagination">
      <div class="items">
        <Button label="Anterior" color="seccond" @click="fetchPreviousPage()" />
        <Button label="Próximo" color="primary" @click="fetchNextPage()" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import axios from 'axios'
import Input from '../components/Input'
import Button from '../components/Button'


export default {
  name: 'Main',
  components: {
      Card,
      Input,
      Button
  },
  data(){
        return { 
            pokemon: null,
            name: '',
            pokemonList: [],
            pokemonDetails: [],
            nextPage: null,
            previous: null,
        }
    },
    computed: {
      nameLowerCase: function(){
        return this.name.toLowerCase()
      }
    },
    async mounted(){
         try{
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
            this.pokemonList = response.data.results
            this.nextPage = response.data.next
            this.detailsPokemon(response.data.results)
         }catch(e){
            alert(e)
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
      },
      fetchNextPage: async function(){
        try{
          const response = await axios.get(this.nextPage)
          this.pokemonList = response.data.results
          this.nextPage = response.data.next
          this.previous = response.data.previous
          this.detailsPokemon(response.data.results)
        }catch(e){
          alert(e)
        }
      },
      fetchPreviousPage: async function(){
        try{
          const response = await axios.get(this.previous)
          this.pokemonList = response.data.results
          this.nextPage = response.data.next
          this.previous = response.data.previous
        }catch(e){
          alert(e)
        }
      },
      getDetails: async function(request){
        try{
          const response = await axios.get(request)
          return response.data
        }catch(e){
          alert(e)
        }
      },
      detailsPokemon: function(){
        let list = []
        
        return this.pokemonList.map(async poke => {
          let d = await this.getDetails(poke.url)
          list.push(d)
          this.pokemonDetails = list
        })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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

.pokemon-list{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    justify-items: normal;
    grid-gap: 1%;
}

.pagination{
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: static;
  bottom: 0px;
  margin-top: 15%;

  .items{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: normal;
    grid-gap: 10px;
  }
}

@media (max-width: 768px){
  .content{
    width: 70%;
  }
}

</style>
