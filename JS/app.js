
'use strict';
// console.log('hello there!');
// this is my special '42' note!!


// global variables
var hours = ['6am ','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
//allStores array storing all cookie values - need to push into for added store
var allStores = [];
var storeArray = [
  firstAndPike,
  seaTacAirport,
  seaCenter,
  capHill,
  alki
];
var tableEl = document.getElementById('first' );
// var tableEl_2 = document.getElementById('second' );
var tRowEl = document.createElement('tr');
var totalArrPerHour=[];

// constructor 
function Store(location, min, max, avg){
  this.location=location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  allStores.push(this);
  // for a running total
  this.totalForAllHours=0;
  this.soldCookiesHour= [];

  this.calculationOfCookiesHour = function () {
    for(var i=0; i<hours.length; i++){
      var number = this.randomCookieValue();
      this.soldCookiesHour.push(number);
      console.log('cookies per hour' , this.soldCookiesHour[i]);
      this.totalForAllHours = (this.totalForAllHours + number);
    }
  };

  this.calculationOfCookiesHour();
  console.log(allStores);
  
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

// total for day
Store.prototype.CalcAllStoreTotalPerHour = function() {
  for (var i=0; i< hours; i++) {
    for (var x =0 ;x < storeArray ;x++){
      var totalCookiesAllLocs =0;
      totalCookiesAllLocs+ storeArray[x].soldCookiesHour[i];
    }
    // this is supposed to be the number for all stores each hour
    console.log(' all stores each hour ', totalCookiesAllLocs);
    totalArrPerHour.push(totalCookiesAllLocs);
  }
};
console.log('total of all stores per hour(array) ', totalArrPerHour);
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
  // creates first block in table(store location)
  tRowEl = document.createElement('tr');
  var tStoreNameEl = document.createElement('td');
  tStoreNameEl.textContent = this.getStore();
  tRowEl.appendChild(tStoreNameEl);
  // for generates cookie amounts over all hours
  for(var i = 0; i < hours.length; i++) {
    var tDataEl = document.createElement('td');
    tDataEl.textContent = this.soldCookiesHour[i];
    tRowEl.appendChild(tDataEl);
  }
  // finishes with last column which is sum of hours
  var tTotalEl=document.createElement('td');
  tTotalEl.textContent = this.totalForAllHours;
  tRowEl.appendChild(tTotalEl);
  tableEl.appendChild(tRowEl);
};
//All stores call
Store.calculateAllStoreHour = function() {
  for(var i; i<5; i++) {
    allStores[i];
  }
};

// set up rendering to array - allows for new location to be added
Store.renderAllCookieRow = function () {
  for (var i=0;  i<allStores.length; i++ ){
    allStores[i].renderCookieRow();
  }
};

Store.renderCookieFooter= function() {
  // creates first block in table(Hard coded)
  tRowEl = document.createElement('tr');
  var tStoreNameEl = document.createElement('tfoot');
  tStoreNameEl.textContent = 'total for hour';
  tRowEl.appendChild(tStoreNameEl);
  // for generates cookie amounts of all stores over all hours
  for(var i = 0; i < hours.length; i++) {
    // cookie amounts of all stores- needs to be total sold array a store index in array
    var tDataEl = document.createElement('tfoot');
    tDataEl.textContent = totalArrPerHour [i];
    tRowEl.appendChild(tDataEl);
  }
  // finishes with last column which is sum of hours
  var tTotalEl=document.createElement('td');
  tTotalEl.textContent = this.totalForAllHours;
  tRowEl.appendChild(tTotalEl);
  tableEl.appendChild(tRowEl);
};

Store.addNewStore= function(event) {
//prevent refreshing of page
  event.preventDefault();
  var newLocation = event.target.storeLocation.value;
  var newMinSales = event.target.minimumSales.value;
  var newMaxSales = event.target.maximumSales.value;
  var newAvgSales = event.target.avgSales.value;
  
  new Store(newLocation, newMinSales, newMaxSales, newAvgSales);
  allStores.push(this);
  this.renderCookieRow();
  console.log('new store added' , newLocation);
};



var firstAndPike = new Store('First and Pike',23,65,6.3);
var seaTacAirport = new Store('SeaTac Airport',3,24,1.2);
var seaCenter = new Store('Seattle Center',11,38,2.3);
var capHill= new Store(' Capitol Hill',20,38,2.3);
var alki= new Store('Alki',2,16,4.6);

renderHeaderRow();
//  --- need to get this working
Store.renderAllCookieRow();

// firstAndPike.renderCookieRow();
// seaTacAirport.renderCookieRow();
// seaCenter.renderCookieRow();
// capHill.renderCookieRow();
// alki.renderCookieRow();

// Store.newStoreObject.renderCookieFooter();

var cookieSales = document.getElementById('cookie-sales');
//event Listener
cookieSales.addEventListener('submit', Store.addNewStore);


