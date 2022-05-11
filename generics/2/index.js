"use strict";
class Vehicle {
}
function convertKmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
class LCV extends Vehicle {
}
const vehicle = convertKmToMiles(new Vehicle());
const lcv = convertKmToMiles(new LCV());
//not checks instant of class, it checks only signature
convertKmToMiles({ run: 1111 });
//generic can extending a primitive type
function logId(id, additionalData) {
    console.log(id);
    console.log(additionalData);
    return { id, data: additionalData };
}
