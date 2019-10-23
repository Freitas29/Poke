<template>
<div class="button-float">
    <router-link :to="{ name: routerName, params: { lastPage }}"><Button label="Voltar" color="primary"/></router-link>
</div>    
</template>
<script>
import Button from '../components/Button'

export default {
    name: "FloatButton",
    components:{
        Button
    },
    props: {
        routerName: {
            type: String,
            required: true,
        },
        lastPage: {
            type: String,
            required: false,
        }
    }
}
</script>


<style lang="scss" scoped>
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
</style>
