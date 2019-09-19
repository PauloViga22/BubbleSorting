document.getElementById("bubbleSortBtn").addEventListener("click", function () {
  var t0 = performance.now();
  if (listArr === undefined || listArr.length == 0) {
    document.getElementById("right").innerHTML = "Generate a random array of numbers first";
    return;
  }
  var tempArr = listArr.slice(0);
  for (var i = 0; i < listArr.length; i++) {
    for (var x = 0; x < tempArr.length - 1; x++) {
      if (tempArr[x] > tempArr[x + 1]) {
        var temp = tempArr[x + 1];
        tempArr[x + 1] = tempArr[x];
        tempArr[x] = temp;
      }
    }
  }
  document.getElementById("right").innerHTML = tempArr;
  console.log(listArr);
  var t1 = performance.now();
  document.getElementById("timer").innerHTML = "Bubble Sort took " + (t1 - t0) / 1000 + " seconds.";
});