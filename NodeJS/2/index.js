import generateName from "sillyname";
import all from "superheroes";

var hero=all;
var sillyName = generateName();

console.log(`My name is ${sillyName} but I am known as the ${hero.random()}`)