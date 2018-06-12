'use strict';

// Location        | Min / Cust | Max / Cust | Avg Cookie / Sale
// ----------------|------------|------------|-------------------
// 1st and Pike      |      23    |     65     |        6.3
// SeaTac Airport  |      3     |     24     |        1.2
// Seattle Center     |      11    |     38     |        3.7
// Capitol Hill |      20    |     38     |        2.3
// Alki            |      2     |     16     |        4.6

/// 1st object creating PIKE store

var pikeStore = {
  hours: [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
  trend: [23,65],
  avg : [6.3],
  
  
  numCookies : function () {
   
    var min = Math.ceil(this.trend[0]);
    var max = Math.floor(this.trend[1]);
    return (Math.floor((Math.random() * (max - min)) + min)*  (this.avg[0]));
    // totCookie = math.round(decCookie)
    // console.log (decCookie);
  }
    
};
  
for (var i=0; i < pikeStore.hours.length; i++) { 
  
  console.log(arrCookie);
  var newElem = document.createElement('li');
  var arrCookie = Math.round(pikeStore.numCookies());
  newElem.appendChild(arrCookie);
  document.getElementById("first").textContent = arrCookie;
  var position = document.getElementById("first")[i];
  position.appendChild(newElem);

}

// function postNum() {
//   document.getElementById("first").textContent = arrCookie;
// }
// postNum();




