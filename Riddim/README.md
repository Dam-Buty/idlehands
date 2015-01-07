Riddim
=========

Riddim is a very simple javascript wrapper for the setTimeout and setInterval functions. Instead of maintaining separate callbacks and handles for all of the timeouts in your application, let Riddim set the tempo. You get simpler code, better performance, and you can focus on what makes your game/app awesome!

# How to use Riddim

Just import the Riddim.min.js file,

````
<script src="Riddim.js"></script>
````

initialize and start Riddim :

````
var riddim = Riddim(10); // Initialize at 10 ticks per sec
riddim.start();          // and start the ticker
````

## How to set a Timeout

````
var sayHello = function() {
  console.log("Hello Riddim!");
}

riddim.plan(sayHello).in(10);
// sayHello will execute in 10 ticks or 1 second
````

## How to set an Interval

````
riddim.plan(sayHello).every(5);
// sayHello will execute every 5 ticks or twice per second
````

# how to stop an interval

Each iteration can return false to stop the Interval.

````
riddim.plan(function() {
  console.log("Trying my luck");
  if (Math.random() > 1/2) {
    return false;
  }
}).every(5);
````
