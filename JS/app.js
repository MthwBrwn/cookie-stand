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

/// 1st object creating PIKE store

var pikeStore = {
  min: 23,
  max: 65,
  avg : 6.3,

  numCookiesArr : function () {

    return (Math.floor((Math.random() * (this.max - this.min)) + this.min)* (this.avg));

  },



  renderCookie : function () {
    var ulPosition = document.getElementById('first');

    for (var i=0; i < hours.length; i++) { 

      // console.log();
      //create li 
      var newElem = document.createElement('li');
      // give content
      newElem.textContent= hours[i]+ ': '+ Math.round(pikeStore.numCookiesArr()) + ' cookies' ;

      // append to interact with Dom      
      ulPosition.appendChild(newElem);
    }
  
  },
  // create 
  // give content 
  // append to the DOM 
  
};
  

function newFunction() {
  var min = Math.ceil(this.min);
  var max = Math.floor(this.max);
  var avg = this.avg;
  return { min, max, avg };
}
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




