"use strict";
var lightBulb;
var switchA = false;
var switchB = false;

// write a conditional statement to set lightBulb to the correct state depending on the position of the switches.

if ((switchA && switchB) || !(switchA && switchB)){
  lightBulb = false;
} else {
  lightBulb = true;
}

// outputs the condition of the light
console.log("The light is " + (lightBulb ? "on" : "off"));
