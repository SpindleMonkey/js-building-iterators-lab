// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function myFilter(arr, callback) {

  var filteredResults = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredResults.push(arr[i]);
    }
    console.log(i + ": " + filteredResults);
  }
}



// export this function (you can ignore this for now)
module.exports = myFilter;
