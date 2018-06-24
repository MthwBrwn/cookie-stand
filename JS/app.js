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
var hours= ['6am ','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
// get element from sales page - will be global 

var ulPosition2 = document.getElementById('second');
var ulPosition3 = document.getElementById('third');
var ulPosition4 = document.getElementById('fourth');
var ulPosition5 = document.getElementById('fifth');

/// 1st object creating PIKE store
var pikeStore = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiePerCust : 6.3,
  // returns random number between min max
  randomCookiesPerHour: function () {
    var rawRandomNum= ((Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer); 
    return Math.floor(rawRandomNum* this.avgCookiePerCust);
  },
  // applies calcdata to chart 
  renderCookiePike: function () {
    var ulPosition = document.getElementById('first');
    for (var i=0; i < hours.length; i++) { 
      //create li 
      var newElem = document.createElement('li');
      // give content
      newElem.textContent= hours[i]+ ': '+ this.randomCookiesPerHour() + ' cookies' ;
      // append to interact with Dom      
      ulPosition.appendChild(newElem);
    }
  }
};
 
pikeStore.renderCookiePike();

// SeaTac Airport  |      3     |     24     |        1.2
var seaTacStore = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiePerCust : 1.2,
  
  randomCookiesPerHour: function () {
    var rawRandomNum= ((Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer); 
    return Math.floor(rawRandomNum* this.avgCookiePerCust);
  },
   
  renderCookiePike: function () {
    var ulPosition = document.getElementById('second');
    for (var i=0; i < hours.length; i++) { 
      
      var newElem = document.createElement('li');
     
      newElem.textContent= hours[i]+ ': '+ this.randomCookiesPerHour() + ' cookies' ;
           
      ulPosition.appendChild(newElem);
    }
  }
};
 
seaTacStore.renderCookiePike();



