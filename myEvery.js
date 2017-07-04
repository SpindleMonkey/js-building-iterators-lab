// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function myEvery(arr, callback) {

  for (var i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}



// export this function (you can ignore this for now)
module.exports = myEvery;
