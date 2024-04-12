
function createRPC(func: Function) {
    // Write some code...
  }
  
  /*
      The toAsync function converts a synchronous function that returns a value
      to one that takes a callback as its last argument and returns the value
      to the callback.
  */
  function toAsync(func: Function): (...args: any[]) => void {
    return function(...args: any[]) {
      const callback = args.pop() || function() {};
      try {
        const result = func(...args);
        callback(null, result);
      } catch (error) {
        callback(error);
      }
    };
  }
  
  export { createRPC, toAsync };