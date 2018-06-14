
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
  // this.randomCookieValue();
  this.renderCookieRow();
  

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

// Store.prototype.addTotal= function() {
//   return this.totalCookieHours;
// };
 
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
  // variable is set in order to 
  // data for store location

  tRowEl = document.createElement('tr');

  var tStoreNameEl = document.createElement('td');
  // attach content
  
  tStoreNameEl.textContent = this.getStore();
  
  tRowEl.appendChild(tStoreNameEl);
  
  for(var i = 0; i < hours.length; i++) {
    //  create  elements
    // function set to a variable 
    var localRandomCookieValue= this.randomCookieValue();
    // allStores[i] =(allStores[i]+localRandomCookieValue);
    //removed this from create element
    var tDataEl = document.createElement('td');
    // attach content

    tDataEl.textContent = localRandomCookieValue;
    
    // 3. append to the DOM
    // parentElement.appendChild(childElement);
    tRowEl.appendChild(tDataEl);
    // console.log('rando cookie hours: ', localRandomCookieValue);
    // console.log( 'totalForAllHours ' , this.totalForAllHours);
    this.totalForAllHours = (this.totalForAllHours + localRandomCookieValue);
  }
  // console.log(allStores);
  //Total cookie    
  // 
  var tTotalEl=document.createElement('td');
  tTotalEl.textContent = this.totalForAllHours;
  tRowEl.appendChild(tTotalEl);
  //  
  tableEl.appendChild(tRowEl);

  tRowEl = document.createElement('tr');
  //sets blank cell
  var tHoursRow = document.createElement('td');
  tHoursRow.textContent = '';
  tRowEl.appendChild(tHoursRow);
  // fills in hours
  for(i=0; i<hours.length; i++){
    tHoursRow = document.createElement('td');
    // tHoursRow.textContent = allStores[i] ;
    tRowEl.appendChild(tHoursRow);
  }
  tRowEl.appendChild(tHoursRow);
  //attach to table
  tableEl.appendChild(tRowEl);
};
renderHeaderRow();
// create new object for constructor object

var firstAndPike = new Store('First and Pike',23,65,6.3);
var seaTacAirport = new Store('SeaTac Airport',3,24,1.2);
var seaCenter = new Store('Seattle Center',11,38,2.3);
var capHill= new Store(' Capitol Hill',20,38,2.3);
var alki= new Store('Alki',2,16,4.6);
