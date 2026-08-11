var hotel = {
    name: 'Hilton',
    rooms: 40,
    booked: 25,

    checkAvailability: function() {
        return this.rooms - this.booked;
    }
}

console.log(hotel.name);   // Hilton
console.log(hotel.rooms);  // 40
console.log(hotel.booked); // 25

console.log(hotel.checkAvailability()); //15