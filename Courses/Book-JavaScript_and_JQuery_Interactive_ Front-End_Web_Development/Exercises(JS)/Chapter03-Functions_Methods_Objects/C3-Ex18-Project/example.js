//Criando objeto pro hotel, com o Literal Object(pois ele quer somente um hotel)

//First part, create the object
var hotel = {
    name: 'Belém',
    valueNoDiscount: 100,
    percentageDiscount: 0.9,

    offerPrice: function() {
        return this.valueNoDiscount * this.percentageDiscount;
    }
}

var nomeHotel = document.getElementById('hotelName');
nomeHotel.textContent = hotel.name;

var valorSemDesconto = document.getElementById('roomRate');
valorSemDesconto.textContent = hotel.valueNoDiscount;

var valorComDesconto = document.getElementById('specialRate');
valorComDesconto.textContent = hotel.offerPrice().toFixed(2);

//Second part
var today = new Date(); //Sat Aug 15 2026 11:03:00 GMT-0300 (Brasilia Standard Time)
function offerExpires(currentDate) {
    var daysWillExpire = new Date(today); ////Sat Aug 15 2026 11:03:00 GMT-0300 (Brasilia Standard Time)
    daysWillExpire.setDate(daysWillExpire.getDate() + 7); //Agora essa variável é dia 22
    
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    var dayName = days[daysWillExpire.getDay()]; 
    //daysWillExpire.getDay() Vai pegar o dia da semana, dia 22 cai num sábado, que pro computador é 6, lembrando que pra ele os dias da semana vão de 0 a 6
    //days[daysWillExpire.getDay()] vai pegar o índice 6 da array days, que é 'sábado'

    var monthName = months[daysWillExpire.getMonth()];
    //daysWillExpire.getMonth() vai pegar o 7, que é agosto. Lembrando que os meses vão de 0 a 11
    //months[daysWillExpire.getMonth()] vai pegar o índice 7 do array months, que é 'agosto'
    
    var dayNumber = daysWillExpire.getDate(); //Vai pegar o número 22, que é o dia 22.
    var year = daysWillExpire.getFullYear(); //Pega o ano 2026

    var expiryMsg = `Offer expires next ${dayName} (${dayNumber} ${monthName} ${year})`;
    window.document.getElementById('offerEnds').innerHTML = expiryMsg;
}

offerExpires(today);