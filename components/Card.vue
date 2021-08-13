<template>
  <div>
    Card
    {{title}}
  </div>
</template>

<script>
import Card from '../model/Card.js'

  export default {
    data() {
      return {
      }
    },
    props : {
        title : Card,
    }
    
  }
</script>

