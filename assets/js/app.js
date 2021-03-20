/*
 * 2C = Two of Clubs = (Dos de trebloes)
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Swords
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const jokers = ["A", "J", "Q", "K"];

// Esta función es la que genera las cartas aleaotoriamente
// creando una nueva baraja
const cartas = () => {
    for (let i = 2; i <= 10; i++) {
        tipos.forEach((tipo) => {
            deck.push(i + tipo);
        });
    }
    jokers.forEach((joker) => {
        tipos.filter((tipo) => {
            deck.push(joker + tipo);
        });
    });

    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);

    return deck;
};

cartas();

const pedirCarta = () => {
    // Genero error si la baraja queda sin cartas
    if (deck.length === 0) {
        throw "No hay mas Cartas en la Baraja";
    }

    // Declaro variable para extraer la ultima carta de la baraja
    const carta = deck.pop();

    console.log(deck);
    console.log(carta);
    return carta;
};
/* pedirCarta(); */
// Aca verifico si la funcion pedirCarta se ejecuta iterando
// todo el arreglo
/* for (let i = 0; i <= 60; i++) {
    pedirCarta();
} */
const valorCarta = (carta) => {
    // Metodo de los strings para seleccionar cierta cantidad de elementos
    const valor = carta.substring(0, carta.length - 1);
    console.log(valor);

    /* let puntos = 0; */
    // Utlizando el operador ternario para separar los valores
    // convertir el texto en numeros enteros.
    return parseInt(valor) ? valor * 1 : valor === "A" ? 11 : 10;

    /*   if (parseInt(valor)) {
        console.log("es un numnero");
        puntos = valor * 1;
    } else {
        if (valor === "A") {
            puntos = 11;
        } else {
            puntos = 10;
        }
    } */

    //console.log({ puntos });
    // console.log({ valor });
};

const valor = valorCarta(pedirCarta());
console.log({ valor });
