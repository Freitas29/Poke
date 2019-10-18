<template>
    <header id="app">
        <a href="">Logo</a>
        <ul>
            <button>Entrar</button>
        </ul>
    </header>
</template>

<script>
export default {
    name: "Header",

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