import Partie from "~/model/Partie"

export const state = () => ({
    partie : null,
    elOne:null,
    elTwo:null
  })

  export const mutations = {
    createPartie(state,nbCard) {
      state.partie = new Partie(nbCard)
    },

    displayCard(state,card){

    let cardSelected = state.partie.listCard.filter(el => el.id === card.id)[0]
    cardSelected.display = true

    if(state.elOne !== null && state.elTwo !== null){

      if(state.elOne.value === state.elTwo.value && state.elOne.id !== state.elTwo.id){
        state.elOne = null
        state.elTwo = null
        }
        else{
         state.elOne.display = false
         state.elTwo.display = false
         state.elOne = null
         state.elTwo = null
        }

    }

    if(state.elOne === null){
        state.elOne = cardSelected
    }
    else if(state.elTwo === null){
        state.elTwo = cardSelected
    }
      
      
    }
  }