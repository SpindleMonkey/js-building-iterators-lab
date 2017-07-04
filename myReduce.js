// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

//  CODE INSIDE HERE   / / 

  //console.log("inside: " + arr + " " + initialValue);

  var accumulator;
  var initIndex = 0;

  // if initialValue is truthy, we have an initial value for the accumulator
  // so we need to init the accumulator, and move the index we'll use to move
  // through the array up one element
  if (initialValue) {
    accumulator = initialValue;
  } else {
    accumulator = arr[0];
    initIndex = 1;
  }
  
  //console.log("arr: " + arr);
  //console.log("accumulator: " + accumulator);
  //console.log("initIndex: " + initIndex);

  for (var i = initIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
    //console.log("loop" + i + ": " + accumulator);
  }
  return accumulator;

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
