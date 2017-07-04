// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

function mySome(arr, callback) {

  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}



// export this function (you can ignore this for now)
module.exports = mySome;
