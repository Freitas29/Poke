<template>
    <div class="card">
        <div class="card-image">
            <img :src="image">
        </div>
        <div class="card-details">
            <h1>{{name}}</h1>
            <div class="types">
                <label>{{gender}}</label>
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
        gender: {
            type: String,
            required: true,
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
    height: 100%;
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
}

.card-details h1{
    text-align: center;
}

</style>