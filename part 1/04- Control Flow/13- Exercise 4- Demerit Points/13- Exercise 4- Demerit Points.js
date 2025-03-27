// Description:
// Implement a `checkSpeed` function that takes a speed as input:
// - If speed is within the allowed limit (`75` km/h or below), display `"Ok"`.
// - For every additional `5` km/h over `70` km/h, the driver receives 1 point.
// - If the driver accumulates 12 or more points, display `"License suspended"`.
// - Otherwise, display `"Points: X"` where X is the calculated points.

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
