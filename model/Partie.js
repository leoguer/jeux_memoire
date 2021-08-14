import Card from './Card'

export default class Partie {
    constructor(nbCard){

        //Verification d'avoir un nombre de carte paire
        if(nbCard%2 === 0){
           this.listCard = []
           this.createAllCard(nbCard)
           this.listCard.sort(()=> Math.random() - 0.5); 
        }
        else{
            this.error = "nombres de card incorrecte"
        }
    }

    //On remplie le tableau de valeur
    createAllCard(nbCard){
        let id = 0;
        for(let i=0;i<nbCard/2;i++){
            let val = Math.floor(Math.random() * 100);
            this.listCard.push(new Card(id,val))
            id++
            this.listCard.push(new Card(id,val))
            id++
        }
    }
}