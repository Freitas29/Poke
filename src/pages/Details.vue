<template>
    <div class="container">
        <div class="card">
            <div class="card-details">
                <div class="card-image">
                    <img :src="pokemon.sprites.front_default">
                     <h1>{{pokemon.name}}</h1>
                </div>
                
                <div class="card-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus justo, laoreet eget imperdiet pretium, sollicitudin quis nisl. Nullam fringilla, est a rutrum pulvinar, leo ligula volutpat nibh, a facilisis lectus tortor porta orci. Curabitur ex massa, tristique vel molestie vel, finibus porta neque. Sed eu dui eget arcu bibendum rutrum. 
                        Aliquam elementum dolor id efficitur tincidunt. 
                        Nunc malesuada dui ut risus iaculis,
                         ac sagittis velit pellentesque. </p>
                </div>
            </div>

            <div class="pokemon-details">
                <div class="pokemon-details-description">
                    <h1>Peso</h1>
                    <p>{{pokemon.weight}}</p>
                </div>

                <div class="pokemon-details-description">
                    <h1>Altura</h1>
                    <p>{{pokemon.height}}</p>
                </div>

                <div class="pokemon-details-description">
                    <h1>Experiência base</h1>
                    <p>{{pokemon.base_experience}}</p>
                </div>

                <div class="pokemon-details-description">
                    <h1>Tipo</h1>
                    <label v-for="type in pokemon.types" v-bind:key="type.type.name" v-bind:style="getColor(type.type.name)">{{type.type.name}}</label>
                </div>
            </div>

            <div class="pokemon-status">
                <h1>Status</h1>

                <div class="pokemon-status-progress" v-for="stats in pokemon.stats" v-bind:key="stats.stat.name">
                    <h3>{{stats.stat.name}}</h3>
                    <progress-bar 
                        :val="stats.base_stat"
                        size="large"
                        :bar-color="getColor(stats.stat.name)"
                        :text="stats.base_stat.toString()"
                        text-position="bottom left"
                        text-fg-color="#e5e5f1"
                    />

                </div>
                    
            </div>
        </div>
    </div>
</template>

<script>
import ProgressBar from 'vue-simple-progress'
import axios from 'axios'
import mixinColor from '../mixins/getColor.js'

export default {
    name: "Details",
    components: {
        ProgressBar
    },
    methods: {
        getColor(value){
            return this.color(value)
        }
    },
     async mounted(){
         try{
           const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}/`)
           this.pokemon = response.data
         }catch(e){
             alert(e)
         }
     },
    data(){
        return{
            pokemon: null
        }
    },
    mixins: [mixinColor]


}
</script>
<style lang="scss" scoped>
    .container{
        padding: 15px 20px;
        width: 100%;
        height: auto;

        h1,h3,p{
            color: #e5e5f1;
        }

        label{
            font-size: 14px;
            color: #57606f;
            text-transform: uppercase;
            padding: 5px;
            border-radius: 15px;
            margin: 3px;
        }

        .card{
            background-color: #25202782;
            border-radius: 10px;

            .card-details{
                display: grid;
                grid-template-columns: repeat(2,1fr);
                align-content: center;

                .card-image{
                    display: grid;
                    grid-template-columns: 1fr;
                    justify-items: center;

                    img{
                        height: 100%;
                        max-height: 150px;
                        width: 30%;
                    }
                }

                .card-description{
                    text-align: justify;
                    padding: 15px;
                    line-height: 2.1rem;
                    font-size: 23px;

                }
            }

            .pokemon-details{
                margin-top: 5%;
                padding: 15px;
                display: grid;
                grid-template-columns: repeat(4,1fr);
                justify-items: center;
                
            }

            .pokemon-status{
                margin-top: 5%;
                padding: 15px;

                .pokemon-status-progress{
                    margin: 2%;
                }
            }

        }
    }

</style>