var rndNum = 0,
  listArr = [];

document.getElementById("generateBtn").addEventListener("click", function () {

  listArr = [];
  rndNum = Math.floor((Math.random() * 1000) + 1);
  for (n = 1; n < rndNum; n++) {
    listArr.push(n);
  }
  shuffle(listArr);
  console.clear();
  // console.log(listArr);

  document.getElementById("left").innerHTML = listArr;
});



var shuffle = function (array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};