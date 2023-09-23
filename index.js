// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  //returns the number of blocks given a value
  return Math.abs(blocks -42)
}
function  distanceFromHqInFeet( blocks ){
  //  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
// passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
// the return value of distanceFromHqInBlocks can then be used to calculate feet
  return Math.abs(blocks - 42 ) * 264
}

//returns the number of feet traveled
function distanceTravelledInFeet(startblock, endblock){
  return Math.abs(startblock - endblock) * 264
}

//returns the fare for the customer
function  calculatesFarePrice(startblock, endblock){
  const distance= distanceTravelledInFeet(startblock, endblock)
  if ( distance <= 400){
      return 0;
  }else if (distance > 400 && distance <= 2000){
      //The first four hundred feet are free. For a distance between 400 and 2000 feet,
      // the price is 2 cents per foot (not including 400, which are free
      return (distance - 400) * 0.02
  }
  else if (distance > 2000 && distance <=2500){
      return 25
  }
  else if (distance >2500){
      //the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
      return'cannot travel that far';
  }
}