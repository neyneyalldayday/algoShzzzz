











function evensOnly(arr) {
    // var evensArray = []

    // for(var i = 0 ; i < arr.length; i++) {
        
    //     if (arr[i] % 2 === 0) {
    //         evensArray.push(arr[i])
    //     }
    // }
    // return evensArray
   return arr.filter(function(number) {
       return number % 2 === 0;
   })
}





console.log(evensOnly([1,2,3,4,5,6,7,8,9,10]));
console.log(evensOnly([21,26,28,29]))