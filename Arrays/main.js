repl.it








//quiz begins
var correct = 0;

//ask questions
var answer1 = prompt('Name a programming language that\'s also a gem');
if ( answer1.toUpperCase() === 'RUBY') {
  correct += 1;
}
var answer2 = prompt("Name a programming langauge that's also a snake");
if (answer2.toUpperCase === 'PYTHON') {
  correct += 1;
}
Var answer3 = prompt ("What langauge ddo you use to stlye web pages?");
if (answer3.toUpperCase === 'CSS'); {
  correct += 1;
}
var answer4 = prompt("What lagauage do you use to build the structure of web pages?");
if (answer4.toUpperCase === 'HTML') {
  correct +=1;
}
var answer5 = prompt("What langauge do you use to add interactivity to a web page?");
if (answer5.toUpperCase === 'JAVASCRIPT') {
  correct += 1;
}

//output results
document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

//output rank
if ( correct === 5 ) {
  document.write("<p><strong> You earned a gold crown!</strong></p>");
} else if ( correct >= 3 ) {
  document.write("<p><strong>You earned a silver crown.</strong></p>");
}













var calculatorOn = false;

function pressPowerButton() {
  if (calculatorOn) {
    console.log('Calculator turning off.');
    calculatorOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorOn = true;
  }
}

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.




var moonPhase = 'full';

switch (moonPhase) {
 case 'full':
    console.log('Howwwwlll!!');
    break;
 case 'mostly full':
    console.log('Arms and legs are getting harrier');
    break;
 case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
}


&& checks if both sides are true.
|| checks if either side is true.
!== checks if both sides are not equal.
! changes a variable that is true to false, and vice versa.



function getRandomNumber ( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}
// console.log( getRandomNumber(6) );
// console.log( getRandomNumber(100) );
// console.log( getRandomNumber(10000) );
// console.log( getRandomNumber(2) );
function getArea(width, legth) {
  var area = width * length;
  return area + " " + unit;
}
console.log(getArea(10, 20, 'sq ft'));








function returnValue(ferociousAnimal) {
  return ferociousAnimal;
}

var echo = returnValue('Red Fox');





getYear();
var yearToday = getYear();





function alertRandom() {
  var randomNumber = Math.floor( Math.random () * 6 ) + 1;
  alert( randomNumber);
}
alertRandom();

//returning values
function getRandomNumber() {
  var randomNumber = Math.floor( Math.random () * 6 ) + 1;
  return randomNumber;
}
alert( getRandomNumber() );
console.log( getRandomNumber() );
var dieRoll = getRandomNumber ();
//return statement should be the last thing in a funtion

//access elements in form field
function isEmailEmpty() {
  var field = document.getElementById('email');
  if (field.value === '') {
    return true;
  } else {
    return false;
  }
}
var fieldTest = isEmailEmpty();
if (fieldTest === true) {
  alert('Please provide your email address.');
}








("3" === 3)
This would be false because one is considered a string
and the other is a number value


> Greater Than
>= Greater Than or Equal To
< Less Than
<= Less Than Or Equal To
=== Equal to
!= Not Equal To
!== Strict Not Equal To




//
//           While Loop Definition:
// With a While Loop the condition is evaluated before the loop.
// 1) If the test condition is not true at the begining then the loop will NEVER run.
// 2) You always need a way to break out of the loop. This is where "break" comes in handy.
// You can always change a variable inside the loop to change to false.
// Do no create endless loops where the condition is always true.
//
//         Do While Loop Definition:
// The do while loop will always execute the code block at least once.
// Thats because the condition isnt tested until after the codeblock.
// Do While Loops are useful when you want to prompt the user for some information
// and make sure the user gives it to you.
//
//         Differences:
// A While Loop checks the coniditon at the very beginning. If the condition is true, then the loop runs. If false, the loop does not run.
// The Do While loop doesnt check the condition until the codeblock has been run once.
// Then, if the condition is true it runs again and again until the condition is no longer true.


// function randomNumber(upper) {
//   return Math.floor( Math.random() * upper ) + 1;
//
// }
// var counter = 0;
// while ( counter < 100 ) {
//   var randomNumber = randomNumber(6);
//   document.write(randNum + '');
//   counter += 1;
// }
//
//
// First the JavaScript interpreter reads through the program.
// It memorizes the function and checks for any syntax errors.
// Then it starts to run the program. It creates a variable named counter and stores the value of zero in it.
// It then looks at the while loop.
// It tests the condition.
// At this point, the counter variable holds a value of zero.
// The loop coniditon asks if the counter is less than 10.
// In this condition, yes, 0 is less than 10 so the JavaScript in terpreter enters the codeblock
// and does several things.
// First, it generates a new random number from 1 to 6.
// It writes that random number in a space character to the page.
// It adds 1 to the counter variable.
// That variable now holds the value of 1.
// The loop goes back to the while condition and checks it again.
// Is 1 less than 10? Yes it is. So the loop runs again and again until the loop condition is
// no longer true.
// So when the counter is equal to 10 the condition is no longer true cause the condition si not less than 10.
// The loop ends and the program continues.
//










var guess;
var guestCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

while ( guessCount < 10 ) {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
    break;
  }
}

if ( correctGuess ) {
  document.write('<h1>You guessed the number!</h1>');
  document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
} else {
    document.write('<h1>Sorry. You did not guess the number.</h1>');
  }
}













// var html = '';
//
// for ( i = 1; i <= 10; i += 1 ) {
//   html += '<div>' + i + '<div>';
// }
// document.write(html);
//
//
//
//
// for (var num = 4; num <= 154; num++){
// console.log(num);
// }





// var counter = 0;
// while (counter < 10 ) {
//   document.write( counter );
//   counter += 1;
// }
//
// for ( var counter = 0; counter < 10; counter += 1 ) {
//   document.write( counter );
// }
//
//  You can also write the counter in a single letter form like example below
//
//  for ( var i = 1; i <= 10; += 1 ) {
//    document.write ( i );
//  }










// ANOTHER EXAMPLE OF DO WHILE LOOPS
//
// var secret; // declare the secret variable so you can use it inside the loop
// do { // always do the following code block at least once
//   secret = prompt("what is the secret password?"); // execute the code inside the block...
// } while (secret !== "sesame"); // and THEN evaluate if secret is equal to 'sesame' - if not, run the block again until it is.
// document.write("You know the secret password. Welcome."); // once secret = sesame, write to the document
//
//
//
//   CODE FOR DO WHILE LOOPS
//
// var upper = 10000;
// var randomNumber = getRandomNumber(upper);
// var guess;
// var attempts = 0;
//
// function getRandomNumber(upper) {
//   return Math.floor( Math.random() * upper ) + 1;
// }
//
// while ( guess !== randomNumber ) {
//   guess = getRandomNumber( upper );
//   attempts += 1;
// }
// document.write("<p>The random number was: " + randomNumber +"</p>")
// document.write("<p> It took the computer " + attempts + " attempts to get it right.</p>")



// function randomNumber(upper) {
//   return Math.floor( Math.random() * upper ) + 1;
// }
// var counter = 0;
// while ( counter < 1000 ) {
//   var randNum = randomNumber(6);
//   document.write(randNum + '');
//   counter += 1;
// }
//
//
//
//
//
// document.write(count);

// while () {
//
//
// }
