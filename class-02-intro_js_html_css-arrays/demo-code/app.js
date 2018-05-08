'use strict';

var userPoints = 0;
//check if the user's answer is correct
//what is correct?
//find out wha the answer is
//toLowerCase or toUpperCase
//use a confirm box?

console.log('hello world');

alert('Welcome to m guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + '! I am so glad you want to play my game.');

var answer = prompt('Is Rachel\'s favorite food kimchi?' , 'type yes or no').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    //if it's correct give them a point
    userPoints++;
} else {
    //if it's not correct, tell them to keep trying
    alert('Nope! I love all spicy food. ALL SPICY FOOD.');
}

alert('you have ' + userPoints + ' points');