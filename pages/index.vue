<template>
  <div>
    <h1>Montagnes</h1>
    {{card}}
    <LazyCard :title="card" />
    <nuxt-link to="/board">Board Game</nuxt-link>
  </div>
</template>

<script>
import Card from '../model/Card.js'


  export default {
    data() {
      return {
          card : new Card(0,1)
      }
    },
    created() {
      this.$store.commit('connection')
      console.log(this.$store.state.authenticated)
       
      }

  }
</script>