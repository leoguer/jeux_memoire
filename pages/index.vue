

<template>
  <div>
    <h1>Montagnes</h1>
    {{card}}
    <LazyCard :title="card" />
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
       
    },
  }
</script>