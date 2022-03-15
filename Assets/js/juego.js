

let deck=[];
const tipos=['C','D','H','S'];
const especiales=['A','J','Q','K'];

//Crea la baraja aleatoriamente
const crearDeck = ()=>{
    for (let i = 0; i <= 10; i++) {
    
        for (let tipo of tipos) {
            deck.push( i + tipo); 
        }
        
    }

    for (let tipo of tipos) {
        for (const esp of especiales) {
            deck.push( esp + tipo );
        } 
    }

    deck=_.shuffle( deck );
    console.log( deck );
}
crearDeck();

const pedirCarta = () => {
    if(deck.length===0){
        throw 'No hay cartas en el deck';
    }
    let carta = deck.pop();
    /* let carta = deck[0];
    deck.splice(deck.indexOf(carta),1); */
    return carta
}


