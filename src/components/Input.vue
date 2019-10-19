<template>
    <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
      >  
</template>

<script>
export default {
    props: ['value'],
    computed: {
        inputListeners: function(){
            var vm = this
            return Object.assign({},
                this.$listeners,
                {
                    input: function (event) {
                        vm.$emit('input', event.target.value)
                    }
                }
            )
        }
    },

}
</script>

<style scoped>
    input{
        border: none;
        padding: 12px 15px;
        border-radius: 15px;
        outline: none;
        width: 50%;
        background-color: #2c2932;
        font-weight: bold;
        color: #fff;
        font-size: 14px;
    }
</style>