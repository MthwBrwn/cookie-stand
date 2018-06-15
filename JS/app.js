
'use strict';
// console.log('hello there!');
// this is my special '42' note!!


// global variables
var hours = ['6am ','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
//array storing all cookie values
var tableEl = document.getElementById('first' );
var allStores = [];

var tRowEl = document.createElement('tr');

function Store(location, min, max, avg){
  this.location=location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.totalForAllHours=0;
  this.soldCookiesHour= [];
  // this.randomCookieValue();
  // this.renderCookieRow();
  this.calculationOfCookiesHour = function () {  
    for(var i=0; i<hours.length; i++){
      var number = this.randomCookieValue();
      this.soldCookiesHour.push(number);
      // console.log(this.soldCookiesHour[i]);  
      this.totalForAllHours = (this.totalForAllHours + number);
    }
  };
  this.calculationOfCookiesHour();
}



// building function to put storeName on table
Store.prototype.getStore= function () {
  // this.location= location;
  // console.log('store location: ', this.location);
  return this.location;
};

Store.prototype.randomCookieValue = function () {
  return Math.round((Math.random() * (this.max - this.min) + this.min) * this.avg);
};


// Use array to render header 
var renderHeaderRow = function () {
  tRowEl = document.createElement('tr');
  //sets blank cell
  var tHoursRow = document.createElement('th');
  tHoursRow.textContent = '';
  tRowEl.appendChild(tHoursRow);
  // fills in hours
  for(var i=0; i<hours.length; i++){
    tHoursRow = document.createElement('th');
    tHoursRow.textContent = hours[i] ;
    tRowEl.appendChild(tHoursRow);
  }
  tHoursRow = document.createElement('th');
  tHoursRow.textContent = 'Total';
  tRowEl.appendChild(tHoursRow);
  //attach to table
  tableEl.appendChild(tRowEl);
};

Store.prototype.renderCookieRow= function() {
  // Locate table
  // render row based off of array soldCookiesHour[]
  tRowEl = document.createElement('tr');

  var tStoreNameEl = document.createElement('td');
  // attach content
  tStoreNameEl.textContent = this.getStore();
  tRowEl.appendChild(tStoreNameEl);
  
  for(var i = 0; i < hours.length; i++) {
    
    var tDataEl = document.createElement('td');
    // attach content

    tDataEl.textContent = this.soldCookiesHour[i];
  
    tRowEl.appendChild(tDataEl);

  }
  // console.log(allStores);
  //Total cookie    
  // 
  var tTotalEl=document.createElement('td');
  tTotalEl.textContent = this.totalForAllHours;
  tRowEl.appendChild(tTotalEl);
  //  
  tableEl.appendChild(tRowEl);

  // tRowEl = document.createElement('tr');

  // var tHoursRow = document.createElement('td');
  // tHoursRow.textContent = '';
  // tRowEl.appendChild(tHoursRow);
  // // fills in hours
  // for(i=0; i<hours.length; i++){
  //   tHoursRow = document.createElement('td');
  //   // tHoursRow.textContent = allStores[i] ;
  //   tRowEl.appendChild(tHoursRow);
  // }
  // tRowEl.appendChild(tHoursRow);
  // //attach to table
  // tableEl.appendChild(tRowEl);
};
renderHeaderRow();
// create new object for constructor object

var firstAndPike = new Store('First and Pike',23,65,6.3);
var seaTacAirport = new Store('SeaTac Airport',3,24,1.2);
var seaCenter = new Store('Seattle Center',11,38,2.3);
var capHill= new Store(' Capitol Hill',20,38,2.3);
var alki= new Store('Alki',2,16,4.6);

firstAndPike.renderCookieRow();
seaTacAirport.renderCookieRow();
seaCenter.renderCookieRow();
capHill.renderCookieRow();
alki.renderCookieRow();
