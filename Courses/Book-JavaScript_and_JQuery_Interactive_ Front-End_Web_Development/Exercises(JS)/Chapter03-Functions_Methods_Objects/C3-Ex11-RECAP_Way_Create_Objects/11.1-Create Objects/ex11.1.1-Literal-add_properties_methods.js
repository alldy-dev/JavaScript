//Literal Notation
var hotel = {}

hotel.name = 'Quay';
hotel.rooms = 40;
hotel.booked = 25;

hotel.checkAvailability = function() {
    return this.rooms - this.booked
}

// Imprimindo no Node
console.log("Hotel:", hotel.name);
console.log("Quartos totais:", hotel.rooms);
console.log("Quartos ocupados:", hotel.booked);
console.log("Disponíveis:", hotel.checkAvailability());