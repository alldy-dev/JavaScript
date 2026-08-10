var hotel = new Object();

hotel.name = 'Park'; //Properties
hotel.rooms = 120; //Properties
hotel.booked = 77; //Properties

hotel.checkAvailability = function() {
    return this.rooms - this.booked;
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();

