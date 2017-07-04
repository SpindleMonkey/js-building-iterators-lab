// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {

//  CODE INSIDE HERE   //
  //  What are our inputs? call back function
  // What is our output? a new array, same length as array that was mapped
  // What happens on each loop? a new array element is created in the new array
  // What does the callback function do? whatever plus produces a new element
  // What gets passed into our callback function? i.e. what arguments does it receive? (it's inputs)
  //    Where does it come from?
  //    How do we know what to name it?

  var mappedArr = [];

  for (var i = 0; i < arr.length; i++) {
    mappedArr[i] = callback(arr[i], i, arr);
  }
  return mappedArr;

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
