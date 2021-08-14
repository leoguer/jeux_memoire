<template>
  <div v-if="value.display" >
    {{value.value}}
  </div>
  <div v-else v-on:click="handlerCardClick">
    ?
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
        value : Card,
    },
    methods: {
      handlerCardClick:function(){
         this.$store.commit('Partie/displayCard',this.value)
        console.log(this.value)
      }
    },
    
  }
</script>

<style lang="scss" scoped>
  div{
    width:30px;
    padding:10px 5px;
    border:black solid 1px;
    border-radius:5px;
    margin:5px;
    cursor:pointer;
  }
</style>

