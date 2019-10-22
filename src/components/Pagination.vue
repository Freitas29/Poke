<template>
    <div class="pagination">
      <div class="items">
        <Button label="Anterior" color="seccond" @click="previousPage" />
        <Button label="Próximo" color="primary" @click="nextPage" />
      </div>
    </div>
</template>

<script>
import Button from '../components/Button'

export default {
    components: {
      Button
    },
    props: {
        nextPage: {
            type: Function,
            required: true
        },
        previousPage: {
            type: Function,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination{
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: static;
  bottom: 0px;
  margin-top: 15%;

  .items{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: normal;
    grid-gap: 10px;
  }
}
</style>