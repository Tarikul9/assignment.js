
// Problem1 : Kilometer To Meter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var schoolDistance = kilometerToMeter(5);
console.log(schoolDistance);
var hospitalDistance = kilometerToMeter(9);
console.log(hospitalDistance);


//Problem 2 :Budget Culculator
//*var watch = 3;
var price = 50;
var watch = 3;
console.log(price * watch)

//phone
var phonePrice = 100;
for (var i = 1; i <= 7; i++) {
    var totalPhonePrice = phonePrice * i;
    console.log(totalPhonePrice);
}
//Laptop price
var laptopPrice = 500;
for (var i = 1; i <= 5; i++) {
    var totalLaptopPrice = laptopPrice * i;
    console.log(totalLaptopPrice);
}


//hotelCost
function hotelCost(perDay){
    var cost = perDay * 100;
    return cost;
}
var firstTenDay = hotelCost(10);
console.log(firstTenDay);

//ten To tweenty
function hotelCost(perDay){
    var cost = perDay * 80;
    return cost;
}
var tenTotweenty = hotelCost(10);
console.log(tenTotweenty);