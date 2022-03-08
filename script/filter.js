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

   //filter method
   //http://bit.ly/array-filter-method


   function noStringArray(arr) {
    //    var filteredArray = []
    //    for (var i = 0; i < arr.length; i++) {
        //    if (Number.isInteger(arr[i])) {
        //        filteredArray.push(arr[i])

        //    }

        //anotherway

        // if (typeof arr[i] === "number") {
        //     filteredArray.push(arr[i])
        // } 

        //the filter way
        

        // return arr.filter(function(number) {
        //   return typeof number ===  "number" 
           
        // })

        return arr.filter(function(items){
            return Number.isInteger(items)
        })


    //    }
    //    return filteredArray;

    
   }

   console.log(noStringArray([2, 'two', 4, 'four', 6 , 'six']));
   console.log(noStringArray(['a', 24, 'd', 32, 'b', 7]))