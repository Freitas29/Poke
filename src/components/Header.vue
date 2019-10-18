<template>
    <header id="app">
        <a href="">Logo</a>
        <ul>
            <router-link to="/">
                <Button label="Entrar" color="primary"/>
            </router-link>
        </ul>
    </header>
</template>

<script>

import Button from './Button'

export default {
    name: "Header",
    components: {
        Button
    }
}
</script>

<style scoped>
    header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #a55eea;
        height: 60px;
    }
</style>