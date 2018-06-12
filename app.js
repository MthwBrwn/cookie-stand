'use strict';



// all global variables ------------------
var rightCount = 0;
var triesCount = 0;

// questions for first argument of persQues function
var QuesCode = 'Is this the first coding school Matthew has attended?';
var QuesSign = 'Wow. Matthew seems like a fire sign. Is Matthew a Leo?';
var QuesCook = 'Does Matthew enjoy cooking?';
var QuesFrom = 'Is Matthew from Seattle?';
var QuesSports = 'So Matthew is from Seattle. Does Matthew watch the M\'s?';

// info/filler for user engagement 2nd pos. persQues 
var msgCode = 'Prior to CodeFellows, Matthew had never attended a coding school.';
var msgSign = 'Matthew is not a fire sign. Matthew was born on June 25th which makes him a Cancer and a water sign. Matthew does not place much value on Zodialogical signs , so you can still be friends (even if you are a fire sign). ';
var msgCook = 'Matthew enjoys cooking very much and is always looking for a new recipe to try.';
var msgFrom = 'Matthew is one of the few people in Seattle born in Seattle, but he likes meeting new people no matter where they are from.';
var msgSports = ' Matthew is not a fan of team sports, so he won\'t be watching the M\'s but he loves a good game.';

var trivGDP = 'Please come up with one of the top 7 countries in order of Gross Domestic Product (GDP) per capita.  This is the measured wealth of a nation divided by the number of people';
var arrayGDP = ['liechtenstein', 'qatar','monaco', 'macau', 'luxembourg ', 'falkland islands', 'singapore'];
//---------------------

// intro prompt
var newUser = prompt('Thank you for visiting! What\'s your name?', 'guest');
console.log ('user name is:', newUser);

if (newUser=== 'guest'){
  alert('Guest is a boring name, but I respect your privacy!');
} else { 
  alert('Welcome ' + newUser + '! Let\'s get to know Matthew!');
}

// small function for score alert as that alert is used several times
var scoreAlert = function (){
  triesCount = triesCount +1; 
  alert(newUser + ', your score is : '+ rightCount +' out of '+triesCount);
};

// function for basic yes/no questions. was able to make drier with flip which input should be y or n 

function persQues( question, message, flip){
  var userInput = prompt(question).toLowerCase(); 
  console.log (newUser + ' guessed', userInput );
  if (userInput.startsWith('n')||userInput.startsWith('y') ) {
    if (userInput.startsWith(flip)) {
      confirm( 'That\'s Correct! ' +message + ' Let\'s keep going!');
      rightCount = rightCount+1;
      scoreAlert();
    
    } else  {
      confirm ('That\'s not quite right, but keep going! ' +' '+message);
      scoreAlert(); 
    }
  }else{
    alert ('Hmmm, Try a Yes or No ');
  }
}

//function for random gen'n of number between 1-64
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//function for guess game
function gameGuess(guess, tries){
  var i = 0;

  var randoNum = getRandomInt(guess); 
  var goodGuess =prompt(newUser + ', Shall we play a game? . You have ' +tries+ ' tries. Think of a number between 1 and ' +guess+'.', '1-'+guess);

  for (i = 0 ; i < tries ; i++){
  //need to take string and turn to integer
    var intGuess= parseInt(goodGuess);
    console.log('iteration : ', i);
    console.log(newUser +'guessed ' + intGuess);
    console.log('random number is : '+ randoNum);
    console.log ('number of tries : ' , tries);   
    if ( intGuess > randoNum ){
      alert(newUser + ' My number is lower than yours');
      goodGuess = prompt('Try again');
    } else if ( intGuess < randoNum ){
      alert(newUser + ' my number is larger than yours');
      goodGuess = prompt('Try again');
    } else if (intGuess === randoNum){
      alert (newUser + ' you have the correct number! ');
      rightCount++; 
      scoreAlert();
      break;
    } else {
      alert('Something went wrong ' + newUser + ', try using a number ');
      goodGuess = prompt('Try again');
    }
    if ( tries === i) {
      alert ('you\'ve ran out of guesses!  Refresh the page and Try again !' ); 
    } 
  }
}
// Function for trivia guessing game - Allows 5 tries to guess one of an array 

function triviaGuess (trivType, trivArray) {
  var guess = prompt('Matthew is a big fan of Trivia.  Here is a trivia question for you. ' + trivType +'. You will have 5 guesses');
  var trivCount=0;
  
    
  for(var i = 0; i < trivArray.length; i++){
    console.log(trivArray[i]);
    console.log('user input :', guess);
    var guessDown = (guess).toLowerCase ();
    console.log('guess after transform :',guessDown);
    
    if (trivArray.includes(guessDown)) {
      alert('yes');
      rightCount++;
      scoreAlert();
      alert('The acceptable answers are : '+ trivArray ); 
      break;
    
    }else{
      guess = prompt('Please guess again. You have ' + (5-i) + ' guesses left.');
      trivCount++;
    }
    
    if (trivCount > 4){
      alert('You are out of tries!!!');
      alert('The acceptable answers are : '+ trivArray ); 
      scoreAlert();
      break;
    }
    
  }  
}
  
//function calls for first five Qs

persQues(QuesCode, msgCode, 'y');
persQues(QuesSign, msgSign, 'n');
persQues(QuesCook, msgCook, 'y');
persQues(QuesFrom, msgFrom, 'y');
persQues(QuesSports, msgSports, 'n');
// two calls for guessing game 
gameGuess(64, 6);
gameGuess(4096, 12);

//one call for trivia
triviaGuess (trivGDP, arrayGDP);

