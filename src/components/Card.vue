<template>
    <div class="card">
        <div class="card-image">
            <img :src="image">
        </div>
        <div class="card-details">
            <h1>{{name}}</h1>
            <div class="types">
                <label v-for="gender in genders" v-bind:key="gender.type.name" v-bind:style="getColor(gender.type.name)">{{gender.type.name}}</label>
            </div>
        </div>
    </div>
</template>

<script>
import mixinColor from '../mixins/getColor.js'

export default {
    name: "Card",
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
        }
    },
    methods: {
        getColor(value){
            return this.color(value)
        }
    },
    mixins: [mixinColor]
}
</script>

<style scoped>

.card{
    background-color: #f1f2f6;
    width: 100%;
    height: 100%;
    transition: all 0.4s;
    border-radius: 10px;
}

.card:hover{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 45px 0px, rgba(0, 0, 0, 0.05) 0px 61px 67px 0px;
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

</style>