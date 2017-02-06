function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;

}
var counter = 0;
while ( counter < 100 ) {
  var randomNumber = randomNumber(6);
  document.write(randNum + '');
  counter += 1;
}


First the JavaScript interpreter reads through the program.
It memorizes the function and checks for any syntax errors.
Then it starts to run the program. It creates a variable named counter and stores the value of zero in it.
It then looks at the while loop.
It tests the condition.
At this point, the counter variable holds a value of zero.
The loop coniditon asks if the counter is less than 10.
In this condition, yes, 0 is less than 10 so the JavaScript in terpreter enters the codeblock
and does several things.
First, it generates a new random number from 1 to 6.
It writes that random number in a space character to the page.
It adds 1 to the counter variable.
That variable now holds the value of 1.
The loop goes back to the while condition and checks it again.
Is 1 less than 10? Yes it is. So the loop runs again and again until the loop condition is
no longer true.
So when the counter is equal to 10 the condition is no longer true cause the condition si not less than 10.
The loop ends and the program continues.











// var guess;
// var guestCount = 0;
// var correctGuess = false;
//
// function getRandomNumber( upper ) {
//   var num = Math.floor(Math.random() * upper) + 1;
//   return num;
// }
//
// while ( guessCount < 10 ) {
//   guess = prompt('I am thinking of a number between 1 and 10. What is it?');
//   guessCount += 1;
//   if (parseInt(guess) === randomNumber) {
//     correctGuess = true;
//     break;
//   }
// }
//
// if ( correctGuess ) {
//   document.write('<h1>You guessed the number!</h1>');
//   document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
// } else {
//     document.write('<h1>Sorry. You did not guess the number.</h1>');
//   }
// }
//












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
