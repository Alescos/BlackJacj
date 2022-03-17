

let deck=[];
const tipos=['C','D','H','S'];
const especiales=['A','J','Q','K'];
let puntosJugador=0;
let puntosComputadora=0;

//Referencias HTML
const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputador= document.querySelector('#computador-cartas');

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
    console.log(carta);
    return carta
}

const valorCarta = ( carta )=>{
    //Se obtiene un substring que empieza en la posición cero y va hasta el penultimo valor
    const valor= carta.substring(0,carta.length-1);
    
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10 
            : valor * 1;
    
    /*
    //Esto es lo mismo pero de manera detallada

    let puntos =0;
    //Evalua si el valor de carta no es un número
    if ( isNaN( valor ) ) {

        puntos = ( valor === 'A' ) ? 11 : 10;
        
    } else {
        //Convierte el valor del string a número
        puntos = valor * 1
    }*/

}

const turnoComputadora = ( puntosMinimos ) => {

    do {

        const carta = pedirCarta();
    
        //Modifica el valor de los puntos
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
    
        //Crear carta
        const imgCarta= document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
    
        divCartasComputador.append( imgCarta );

        if (puntosMinimos > 21 ) {
            break;
        }

    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos<=21)) {
        
    }

}


//Eventos
btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta();

    //Modifica el valor de los puntos
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;

    //Crear carta
    const imgCarta= document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        btnPedir.disabled = true;
        btnDetener.disabled=true;
        turnoComputadora( puntosJugador );
    }else if ( puntoJugador === 21 ) {
        btnPedir.disabled = true;
        btnDetener.disabled=true;
        turnoComputadora( puntosJugador );
    }
})


btnDetener.addEventListener('click', ()=>{
    btnPedir.disabled=true;
    btnDetener.disabled=true;
    turnoComputadora( puntosJugador );
})

