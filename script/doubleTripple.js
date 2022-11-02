// * Create `doubleTripleMap` function to achieve the following:

//   * Return a new array derived from the original array. The element at each index of the new array should be double the original element if it is even and triple the original if it is odd.

//   * Refer to the following array for an example:

//     ```
//     var arr = [1, 2, 3, 4];
//     ```

//   * Given the preceding array, the following should be returned:

//     ```
//     [3, 4, 9, 8]

// var arr = [1, 2, 3, ,4]
// var even = []
// var odd = []


// function doubleTripleMap() {

//  const res =  arr.map(element=> {
//     if (element%2===0) {
//         return element * 2
//     } else {
//         return element * 3
//     }
//    }
//    return res;
// }

const doubleTripleFor = function(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i] * 2)
        } else {
            newArr.push(arr[i] * 3)
        }
    }
    console.log(newArr) 
}
doubleTripleFor([1,2,3,4])