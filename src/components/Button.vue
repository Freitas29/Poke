<template>
        <button :class=color >{{ label }}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        label: String,
        color: String,
    }
}
</script>

<style scoped>
    button{
        padding: 10px 30px;
        border: none;
        outline: none;
        border-radius: 15px;
        font-weight: bold;
        font-size: 15px;
        color: #fff;
        cursor: pointer;
    }

    .primary{
        background-color: #4b7bec
    }

    .seccond{
        background-color: #26de81;
    }
</style>