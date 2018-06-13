'use strict';
console.log('hello there!');
// this is my special '42' note!!


// global variables
var hours = ['6am ','7am','8am','9am','10am','11am','12am','13am','14am','15am','16am','17am','18am','19am','20am'];
//array storing all cookie values
var tableEl = document.getElementById('first' );

function Store(location, min, max, avg){
  this.location=location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookieHours=0;
  this.randomCookieValue();
  this.renderCookieRow();
}

Store.prototype.randomCookieValue = function () {

  return Math.round((Math.random() * (this.max - this.min) + this.min) * this.avg);
};

Store.prototype.renderCookieRow= function() {
  // Locate table
  // possible for loop for this =
  
  var tRowEl = document.createElement('tr');
  
  for(var i = 0; i < hours.length; i++) {
    //  create  elements
    
    //removed this from create element
    var tDataEl = document.createElement('td');
    // attach content
    
    tDataEl.textContent = this.randomCookieValue + ' cookies';
    
    // 3. append to the DOM
    // parentElement.appendChild(childElement);
    tRowEl.appendChild(tDataEl);
    //append data to
  }
  tableEl.appendChild(tRowEl);
};
// create new object for constructor object

var firstAndPike = new Store('first and pike',23,65,6.3);

console.log('this.min: ',firstAndPike.min);
console.log('this.max; ',firstAndPike.max);
console.log('random cookies for store ',firstAndPike.randomCookieValue);

// Location        | Min / Cust | Max / Cust | Avg Cookie / Sale
// ----------------|------------|------------|-------------------
// 1st and Pike      |      23    |     65     |        6.3
// SeaTac Airport  |      3     |     24     |        1.2
// Seattle Center     |      11    |     38     |        3.7
// Capitol Hill |      20    |     38     |        2.3
// Alki            |      2     |     16     |        4.6
