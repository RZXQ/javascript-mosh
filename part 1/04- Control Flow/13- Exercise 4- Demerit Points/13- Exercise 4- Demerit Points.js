// Function: checkSpeed(speed)
// Purpose: Determine if a driver is within the speed limit, accumulates demerit points, or gets their license suspended.

// Steps:
// 1. Define constants:
//    - speedLimit = 70 (maximum allowed speed).
//    - kmPerPoint = 5 (km/h over the limit for each point).
// 2. Check speed:
//    - If speed <= speedLimit + kmPerPoint, print "Ok" and exit.
// 3. Calculate points:
//    - points = floor((speed - speedLimit) / kmPerPoint).
// 4. Decision:
//    - If points >= 12, print "License suspended".
//    - Otherwise, print "Points: X".

// Example Outputs:
// - speed = 70 -> "Ok"
// - speed = 75 -> "Ok"
// - speed = 80 -> "Points: 2"
// - speed = 180 -> "License suspended"
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= 12) {
    console.log("License suspended");
  } else {
    console.log("Points: " + points);
  }
}

// Example usage
checkSpeed(180);
