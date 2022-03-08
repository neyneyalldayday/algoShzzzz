//array filter

// challenge 
  //create a function that takes an array of positive numbers and strings and 
  //returns a new array without the strings.

// Examples
  //[2, 'two', 4, 'four', 6 , 'six'] -> [2,4,6];
  //['a', 24, 'd', 32, 'b', 7] -> [24,32,7];

  //approach 1 -

  //tools
  // Number.isInteger()
   //http://bit.ly/isInteger
 // for loop
    //http://bit.ly/for-loop-javascript
  //typeof
   //http://bit.ly/typeof-operator


   function noStringArray(arr) {
       var filteredArray = []
       for (var i = 0; i < arr.length; i++) {
        //    if (Number.isInteger(arr[i])) {
        //        filteredArray.push(arr[i])

        //    }

        //anotherway

        
       }
       return filteredArray;
   }

   console.log(noStringArray([2, 'two', 4, 'four', 6 , 'six']));
   console.log(noStringArray(['a', 24, 'd', 32, 'b', 7]))