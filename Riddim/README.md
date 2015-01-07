Riddim
=========

Riddim is a very simple javascript wrapper for the setTimeout and setInterval functions. Instead of maintaining separate callbacks and handles for all of the timeouts in your application, let Riddim set the tempo. Here are a few examples :

# How to set a timeOut

````
var riddim = Riddim(10); // Initialize at 10 ticks per sec
riddim.start();          // and start the ticker

var sayHello = function() {
  console.log("Hello Riddim!");
}

riddim.plan(sayHello).in(10);
// sayHello will execute in 10 ticks or 1 second
````

# setInterval

````
riddim.plan(sayHello).every(5);
// sayHello will execute every 5 ticks or twice per second
````

# how to stop a setInterval

If the planned function returns false, the every() cycle will end.

````

````
