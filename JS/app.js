'use strict';

// this is my special '42' note!!

// Location        | Min / Cust | Max / Cust | Avg Cookie / Sale
// ----------------|------------|------------|-------------------
// 1st and Pike      |      23    |     65     |        6.3
// SeaTac Airport  |      3     |     24     |        1.2
// Seattle Center     |      11    |     38     |        3.7
// Capitol Hill |      20    |     38     |        2.3
// Alki            |      2     |     16     |        4.6

// global variables 
var hours= ['6am ','7am','8am','9am','10am','11am','12am','13am','14am','15am','16am','17am','18am','19am','20am'];
//array storing all cookie values
var cookieHours =0;
/// 1st object creating PIKE store

 function Store (location, min, max, avg){
  this.location=location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookieHours=cookieHours;


  this.numCookiesArr = function () {

    return Math.round((Math.random() * (this.max - this.min) + this.min) * this.avg);
  },

  Store.prototype.renderCookieRow= function() {
  // Locate table
    var tableEl = this.document.getElementById('first' );
    // possible for loop for this =
    var trEl = this.document.createElement('tr');
    
    for(var i = 0; i < this.hours.length; i++) {
      //  create  elements
      
      var tdEl = this.document.createElement('td');
      
      // attach content
      
      tdEl.textContent =  numCookiesArr + ' cookies';
      
      // 3. append to the DOM
      // parentElement.appendChild(childElement);
      tdEl.appendChild('tr');
    };

  },
 }

