<template>
  <div>
    Board Game
    <div  class="plateau">
      <Card v-for="card in listCard" :key="card.id" :value="card"/>
    </div>
  </div>
</template>

<script>



  export default {
    data() {
      return {
        listCard : this.$store.state.Partie.partie.listCard,
      }
    },
    mounted() {
      console.log(this.$store.state.Partie.partie)
    },
    middleware: 'authenticated',
  }
</script>

<style lang="scss" scoped>
  div.plateau{
   display:flex;
   flex-wrap:wrap;
  }
</style>