<template>
    <div class="card">
        <div class="card-image">
            <img :src="image">
        </div>
        <div class="card-details">
            <h1>{{name}}</h1>
            <div class="types">
                <label v-for="gender in genders" v-bind:key="gender.type.name" :class="getColor(gender.type.name)" >{{gender.type.name}}</label>
            </div>
        </div>
    </div>
</template>

<script>
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
            return `${value} `
        }
    }
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

.electric{
    background-color: #fed330;
    color: #fff !important;
}

.flying{
    background-color: #d1d8e0;
    color: #000 !important;
}

.ice{
    background-color: #2bcbba;
    color: #fff !important;
}

.poison{
    background-color: #8854d0;
    color: #fff !important;
}

.ground{
    background-color: #cd6133;
    color: #fff !important;
}


.rock{
    background-color: #84817a;
    color: #fff !important;
}

.bug{
    background-color: #218c74;
    color: #fff !important;
}

.fire{
    background-color: #ff5252;
    color: #fff !important;
}

.ghost{
    background-color: #474787;
    color: #fff !important;
}

.steel{
    background-color: #aaa69d;
    color: #000 !important;
}

.water{
    background-color: #45aaf2;
    color: #fff !important;
}

.grass{
    background-color: #26de81;
    color: #fff !important;
}

.psychic{
    background-color: #f7b731;
    color: #fff !important;
}

.dragon{
    background-color: #fc5c65;
    color: #fff !important;
}

.dark{
    background-color: #2c2c54;
    color: #fff !important;
}

.fairy{
    background-color: #f7f1e3;
    color: #000 !important;
}

.unknown{
    background-color: rgba(0, 0, 0, 0.1);
    color: #fff !important;
}

.shadow{
    background-color: #40407a;
    color: #fff !important;
}

</style>