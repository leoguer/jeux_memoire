<template>
  <div>
    <h1>Jeux de paire</h1>
    <h3>Entrez le nombre de carte :</h3>
    <h5>* Le nombre de carte doit être paire</h5>
    <input v-model="nbCard" type="number">
    <p ref="error">Le nombre sélectionner est incorrecte</p>
    <button v-on:click="handlerClick">Lancer la partie</button>
  </div>
</template>

<script>
import Partie from '../model/Partie.js'


  export default {
    data() {
      return {
          nbCard : 0,
      }
    },
    created() {
      this.$store.commit('connection')
    },
    methods: {
      //Method pour le click debut de partie
      handlerClick:function(){
        //On vérifie que le nombre entrez est le bon
        if(this.nbCard % 2 === 0 && this.nbCard != 0 ){
          this.$store.commit('Partie/createPartie',this.nbCard)
          this.$router.push('/board')
        }
        else{
         this.$refs.error.style.display = "block"
        }
      }

    },
  }
</script>

<style lang="scss" scoped>
  div{
    display:flex;
    align-items:center;
    flex-direction:column;
  }

  p{
    display:none;
    color:red;
  }
  
</style>