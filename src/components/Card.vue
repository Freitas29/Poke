<template>
    <router-link class="nav-link" :to="{name: 'details', params: {id, page}}">
        <div class="card">
            <div class="card-image">
                <img v-show="isLoad" :src="image" @load="loaded">
                <div v-show="!isLoad" class="loading-image" >
                </div>
            </div>
            <div class="card-details">
                <h1>{{name}}</h1>
                <div class="types">
                    <label v-for="gender in genders" v-bind:key="gender.type.name" v-bind:style="getColor(gender.type.name)">{{gender.type.name}}</label>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import mixinColor from '../mixins/getColor.js'

export default {
    name: "Card",
    data(){
        return{
            isLoad: false,
        }
    },
    props: {
        image: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        genders: {
            type: Array,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
        page: {
            type: String,
            required: false
        }
    },
    methods: {
        getColor(value){
            return this.color(value)
        },
        goToDetails(){
            return `pokemon/${this.id}`
        },
        loaded(){
            this.isLoad = true
        }
    },
    mixins: [mixinColor]
}
</script>

<style scoped>
a{
    position: relative;
}
.card{
    background-color: #25202782;
    width: 100%;
    height: 100%;
    transition: all 0.4s;
    border-radius: 10px;
    position: relative;
}

.card:hover{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 45px 0px, rgba(0, 0, 0, 0.05) 0px 61px 67px 0px;
    transform: scale(1.1)
}

.card .card-image{
    width: 100%;
    height: 70%;
}

.card-image img{
    width: 100%;
    height: 250px
}

.card-details{
    padding: 5px;
}

.card-details h1{
    color: #fff;
}

.card-details .types{
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
}

.types label{
    font-size: 14px;
    color: #57606f;
    text-transform: uppercase;
    padding: 5px;
    border-radius: 15px;
}

.card-details h1{
    text-align: center;
}

.loading-image{
    background: linear-gradient(to right, #373b44, #4286f4);
    background-size: 400%;
    width: 100%;
    height: 150px;
    animation: backgroundTransition 5s linear infinite;
    filter: grayscale(13px);
    box-sizing: border-box;
}

@keyframes backgroundTransition {
    0%{
        background-position:0%; 
    }
    100%{
        background-position: 400%; 
    }
}

</style>