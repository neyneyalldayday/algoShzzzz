// var arrA = [1,9,8,7];
// var arrB = [10,12,1,6,5];

// let same = {
//     10:1,
//     12:1,
//     6: 1,
//     5: 1,
//     1: 1,
// }
// function commonElement(){
// for (let i=0; 1 < arrA.length; i ++){
//     if (same[arrA[i]] > 0){
//         return arrA[i]
//     }
// }
   
// console.log(arrA[i])
// }



var commonElement = function(arrA, arrB) {
    var elements = {};
    for (var i = 0; i < arrA.length; i++) {
      var num = arrA[i];
      elements[num] = true;
    }
    for (var i = 0; i < arrB.length; i++) {
      var num = arrB[i];
      if (elements[num] === true) {
        return num;
      }
    }
  };



