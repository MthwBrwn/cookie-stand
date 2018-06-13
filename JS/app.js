'use strict';
console.log('hello world');

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

/// 1st object creating PIKE store

var pikeStore = {
  min: 23,
  max: 65,
  avg : 6.3,

  // returns random number between min max mult. by the avg
  numCookiesArr : function () {
    console.log('min' + pikeStore.min);
    var randomGenNum= (Math.floor((Math.random() * (this.max - this.min)) + this.min));
    console.log(randomGenNum);
  },

  renderCookie: function () {
    var ulPosition = document.getElementById('first');

    for (var i=0; i < hours.length; i++) { 

      console.log(hours[i]);
      //create li 
      var newElem = document.createElement('li');
      // give content
      newElem.textContent= this.hours[i]+ ': '+ pikeStore.numCookiesArr() + ' cookies' ;

      // append to interact with Dom      
      ulPosition.appendChild(newElem);
    }
  },
  // create 
  // give content 
  // append to the DOM  
};

console.log(pikeStore.min);



// for (var i=0; i < pikeStore.hours.length; i++) { 
  
//   console.log(arrCookie);
//   var newElem = document.createElement('li');
//   var arrCookie = Math.round(pikeStore.numCookies());
//   newElem.appendChild(arrCookie);
//   document.getElementById("first").textContent = arrCookie;
//   var position = document.getElementById("first")[i];
//   position.appendChild(newElem);

// }

// function postNum() {
//   document.getElementById("first").textContent = arrCookie;
// }
// postNum();




