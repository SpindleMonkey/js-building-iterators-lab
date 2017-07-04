var myEach = require('./myEach');
var myMap = require('./myMap');
var myReduce = require('./myReduce');
var myFilter = require('./myFilter');
var mySome = require('./mySome');
var myEvery = require('./myEvery');

/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/


var numArray = [0,1,10,100,1000];
var strArray = ["me", "you", "whatever", "them"];


/* myEach */

myEach(strArray, function print(element, index, arr) {
   console.log('inside myEach', element, index, arr);
 });

myEach(strArray, function print2(element) {
  console.log('inside myEach: ', element);
});




/* myMap */


var input = ["a","b","c"];
var output = myMap(input, function capitalize(v){
    return v.toUpperCase();
});
console.log('Testing myMap');
console.log(output);
console.log(output[0] === "A" && output[1] === "B" && output[2] === "C"); // assertion

console.log("the end");




/* myReduce */


var revenues = [ 10.50, 13, 55, 1 ];
var total = myReduce(revenues, function(sum, value) {
  return sum + value;
});
console.log(total);

var yearly = myReduce(revenues, function(sum, value) {
  return sum + value;
}, 100);
console.log(yearly);


/* myFilter */


var names = ["Myrtle", "Olivia", "Melvina", "Zelda", "Oskar"];

var mNames = myFilter(names, function(myName) {
  return myName[0] === 'M';
});
console.log(mNames);

var boys = myFilter(names, function(myName) {
  return myName === 'Oskar';
});
console.log(boys);

var grades = [82, 91, 54, 78];
var failingGrades = myFilter(grades, function(grade) {
  return grade < 70;
});
console.log(failingGrades);




/* mySome */

function isBiggerThan50(element, index, arr) {
  return element > 50;
}


console.log(mySome([20, 17, 33, 3, 0], isBiggerThan50));
console.log(mySome([20, 17, 33, 50, 0], isBiggerThan50));
console.log(mySome([20, 17, 33, 51, 0], isBiggerThan50));



/* myEvery */
console.log(myEvery([60, 17, 33, 3, 0], isBiggerThan50));
console.log(myEvery([51, 51, 51, 50, 51], isBiggerThan50));
console.log(myEvery([65, 67, 63, 51, 90], isBiggerThan50));


function isFullName(element, index, arr) {
  return element.includes(" ");
}

console.log(myEvery(["Connie Kephart", "Zelly Bean", "Ollie Pop", "Anna Banana", "Oskar"], isFullName));
console.log(myEvery(["Connie Kephart", "Zelly Bean", "Ollie Pop", "Anna Banana", "King Oskar"], isFullName));

