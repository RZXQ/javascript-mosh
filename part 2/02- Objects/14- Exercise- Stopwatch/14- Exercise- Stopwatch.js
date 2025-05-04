// Implement a StopWatch object with the following functionality:
//
// 1. Allow starting and stopping time intervals.
//    - start(): Begins timing. Throws an error if the stopwatch is already running.
//    - stop(): Ends timing. Throws an error if the stopwatch is not running.
// 2. Provide a reset() method to clear start and end times, and mark the stopwatch as stopped.
// 3. Include a read-only 'duration' property that returns the elapsed time in seconds between the last start and stop calls.
// 4. Encapsulate internal state variables ('running', 'startTime', 'endTime') so they are not accessible outside the object.
// 5. The duration does not accumulate over multiple start/stop cycles—each cycle is independent.

function StopWatch() {
  let running;
  let startTime;
  let endTime;

  this.start = function () {
    if (running) throw new Error("already running");
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("already stopped");
    running = false;
    endTime = new Date();
  };

  this.reset = function () {
    running = false;
    startTime = undefined;
    endTime = undefined;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return (endTime - startTime) / 1000;
    },
  });
}

const sw = new StopWatch();
