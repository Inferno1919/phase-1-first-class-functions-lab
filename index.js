
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) { 
    let f2 = drivers.slice(0,2);
    return f2;
    
}

const returnLastTwoDrivers = function(drivers) {
    let l2 = drivers.slice(2,4);
    return l2;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(numDri){
   return function(base){
      return (numDri * base);
      
   }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fOrL){
    return fOrL(drivers);
}
