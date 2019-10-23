<template>
    <div class="container">
        <div class="card" v-if="pokemon">
            <div class="card-details">
                <div class="card-image">
                    <img :src="pokemon.sprites.front_default">
                     
                </div>
                
                <div class="card-description">
                    <h1>{{pokemon.name}}</h1>
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
                        max="200"
                        :bar-color="getColor(stats.stat.name)"
                        :text="stats.base_stat.toString()"
                        text-position="top"
                        text-fg-color="#e5e5f1"
                    />

                </div>
                    
            </div>
        </div>
        <div class="button-float">
            <router-link :to="{ name: 'main', params: { lastPage: this.$route.params.page }}"><Button label="Voltar" color="primary"/></router-link>
        </div>
    </div>
</template>

<script>
import ProgressBar from 'vue-simple-progress'
import axios from 'axios'
import mixinColor from '../mixins/getColor.js'
import Button from '../components/Button'

export default {
    name: "Details",
    components: {
        ProgressBar,
        Button
    },
    methods: {
        getColor(value){
            return this.color(value)
        },
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
                    height: 150px;


                    img{
                        height: 100%;
                        width: 30%;
                    }
                }

                .card-description{
                    text-align: justify;
                    padding: 15px;
                    line-height: 1.7rem;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-transform: capitalize;
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

     .button-float{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 20%;
        right: 5%;
        width: 10%;
        height: 50px;

        a{
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 768px){
        .pokemon-details{
            margin-top: 5%;
            padding: 15px;
            display: grid;
            grid-template-columns: repeat(2,1fr) !important;
            justify-items: center;

            h1{
                font-size: 15px !important;
            }

            label{
                font-size: 10px;
            }

            .pokemon-details-description{
                text-align: center;
            }

        }

        .card-image img{
            width: 100% !important;
        }

        .button-float{
            top:13%;
            right: 25%;
        }

        @media (max-width: 1024px){
            .card-image img{
                width: 50% !important;
            }
        }

        @media (min-width: 375px){
            .button-float{
                top:10% !important;
                right: 25%;
            }
        }

        @media (min-width: 320px){
            .button-float{
                top:15%;
                right: 30%;
            }

            .pagination{
                top: 12000px;
            }
        }

        @media (min-width: 411px){
           .button-float{
                top:10.5%;
                right: 25%;
            }
        }
    }

</style>