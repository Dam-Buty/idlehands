Idle hands
=========

# Pact

````
var pacted = Pact(originalValue, domElement[, cssProperty[, unit]]); 
````

Pact is a very simple way to keep DOM elements in sync with variables from your code. It has 0 dependencies and is dead simple. Imagine you have this kind of HTML :

````
<div id="name"></div>
<div id="hp"></div>
````

And this kind of javascript :

````
name = "Yvan";
hp = 30;
````
You can just make a Pact between your hero's characteristics and the corresponding DIVs :

````
name = Pact("Yvan", document.getElementById("name"));
hp = Pact(30, document.getElementById("hp"));
````
Now, Pacted variables can be read and compared just like regular variables

````
name == "Yvan" // returns true
var nickName = name + " the Terrible" // nickName is "Yvan the Terrible"

hp > 20 // returns true
var bossHp = hp * 1000 // bossHp = 30000
````
But to modify them you'll have to use the helpers :
````
name.set("Conan");
hp.plus(10);
`````
When you update a Pacted variable using one of the helpers, the corresponding DOM element will immediately be updated. Simple as that!

## Basic helpers

### .plus(x)

Adds x to the Pacted variable's value. Performs a regular addition in the case of an integer, or a concatenation in the case of a string.

### .minus(x)

Removes x from the Pacted variable's value. Only works on integers!

### .set(x)

Sets the Pacted variable's value to x.

## Binding CSS properties instead of content

By default, a Pacted variable will update its corresponding DOM element's innerHTML, but you can set it to affect any CSS property :

````
team = Pact("blue", document.getElementById("team"), "color");
team.set("red"); // Will turn the corresponding CSS value to red

blockWidth = Pact(50, document.getElementById("block"), "width", "px");
blockWidth.set(200); // "block"'s width is now 200px
````

## Advanced use

Pact stores the original value for comparison purposes. It allows for the following units :

### %

Updates the CSS property to "n%", n being equal to current/original*100.

````
blockWidth = Pact(100, document.getElementById("block"), "width", "%");
blockWidth.set(50); // "block"'s width is now "50%"
````

### /1

Updates the CSS property to the result of current/original, rounded to 2 decimals.
````
opaque = Pact(100, document.getElementById("block"), "opacity", "/1");
opaque.set(50); // "block"'s opacity is now "0.5"
````

## Modifying the original value

### reset(x)

Resets the original value to x

### resetPlus(x)

Add x to the original value

### resetMinus(x)

Removes x to the original value
