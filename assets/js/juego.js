/*
 * 2C = Two of Clubs = (Dos de trebloes)
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Swords
 */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const jokers = ["A", "J", "Q", "K"];

// Con esta funcion se genera las cartas aleatorias
const buscarDeck = () => {
   for (i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
         deck.push(i + tipo);
      }
   }
   for (let joker of jokers) {
      for (let tipo of tipos) {
         deck.push(joker + tipo);
      }
   }
   // Aca esta la libreria Underscore la cual utiliza el metodo aleatorio //
   deck = _.shuffle(deck);
   console.log(deck);
};
buscarDeck();

// Con esta función me permite tomar una carta

const pedirCarta = () => {
   if (deck.length === 0) {
      throw "No hay más cartas en la baraja";
   }
   const carta = deck.pop();

   console.log(deck);
   console.log(carta);
};

for (let i = 0; i <= 60; i++) {
   pedirCarta();
}
