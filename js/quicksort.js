document.getElementById("quickSortBtn").addEventListener("click", executeQuicksort());

let quickSort = function (list) {
  let len = list.length;
  let pivot = list[len - 1]; //make the last number in the array as the pivot
  let left = [];
  let right = [];

  if (len <= 1) {
    return list;
  }

  for (
    let i = 0; i < len - 1; i++ //Iterative
  ) {
    if (list[i] < pivot) {
      left.push(list[i]); //push the smaller numbers to the left
    } else {
      right.push(list[i]); //push the larger numbers to the right
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]; //recursive function (... = spread syntax)
};


function executeQuicksort() {
  return function () {
    var t0 = performance.now();
    if (listArr === undefined || listArr.length == 0) {
      document.getElementById("right").innerHTML =
        "Generate a random array of numbers first";
      return;
    }
    var tempArr = listArr.slice(0);
    document.getElementById("right").innerHTML = quickSort(tempArr);
    var t1 = performance.now();
    document.getElementById("timer").innerHTML =
      "Quick Sort took " + (t1 - t0) / 1000 + " seconds.";
  };
}