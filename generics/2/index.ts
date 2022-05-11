interface IVehicle {
  run: number;
}
interface ILCV extends IVehicle {
  capacity: number;
}

class Vehicle {
  run!: number;
}

function convertKmToMiles<T extends Vehicle>(vehicle: T): T {
  vehicle.run = vehicle.run / 0.62;
  return vehicle;
}

class LCV extends Vehicle {
  capacity!: number;
}

const vehicle = convertKmToMiles(new Vehicle());
const lcv = convertKmToMiles(new LCV());

//not checks instant of class, it checks only signature
convertKmToMiles({run: 1111});


//generic can extending a primitive type
function logId<T extends string | number, Y>(id: T, additionalData: Y): {id: T, data: Y} {
  console.log(id);
  console.log(additionalData);
  return {id, data: additionalData};
}

