const returnFirstTwoDrivers = function(drivers) {

    return(drivers.slice(0,2))
}

const returnLastTwoDrivers = function(drivers) {

    return(drivers.slice(-2))

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return multiplier * fare
    }
}

//This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. 
//If createFareMultiplier() receives an argument of 4 (multiplier), it will return a function that takes in a (fare) as an argument and quadruples the fare.
//Read instructions throughly and out loud/ make sure spelling for tests are correct.

const fareDoubler = function(fare) {
   return createFareMultiplier(2)(fare);
}

//Doubling the fare. Using the previous function we've added a value to the multiplier(2) and it will multiply it by the fare added in

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, driverFunction) {
    return driverFunction(drivers)
}

//Broken down - array of drivers (which is also used in the top two functions) and argument which is a function. 
//So we are passing through the function from the top two (returnFirst or returnLast) 
//depending on which one will return drivers from that (which is also the first parameter for this select function)
//need more practice with this one, alot of research was done and too much time spent