<template>
        <button :class=color @click="callback($event)" >{{ label }}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        label: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: false,
        },
    }, 
    methods: {
        callback: function(e) {
            this.$emit('click', e);
        }
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
        transition: all 0.2s;
    }

    button:hover{
        box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 45px 0px, rgba(0, 0, 0, 0.2) 0px 61px 67px 0px;
        transform: scale(1.1)
    }

    .primary{
        background-color: #4b7bec
    }

    .seccond{
        background-color: #26de81;
    }
</style>