"use strict";
var lightBulb;
var switchA = false;
var switchB = false;

// write a conditional statement to set lightBulb to the correct state depending on the position of the switches.

if (switchA == false && switchB == false) {
  lightBulb = false;
} else if ( switchA == false && switchB == true ) {
  lightBulb = true;
} else if ( switchA == true && switchB == false ) {
  lightBulb = true;
} else {
  lightBulb = false;
}

// outputs the condition of the light
console.log("The light is " + (lightBulb ? "on" : "off"));
