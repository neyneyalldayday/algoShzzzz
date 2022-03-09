// alphabetical Order

// Challenge
    // Create a function that takes a string and returns a string with its letters
    // in alphabetical order.

 // Examples 
    // "hello" -> "ehllo"
    // "goodbye" -> "bdegooy"

// Tools
  // String.prototype.split()
    // http://bit.ly/string-split
    // Array.prototype.sort()
    // http://bit.ly/array-sort
 // Array.prototype.join()
  // http://bit.ly/array-join


  // Spread operator
  // http://bit.ly/spread-operator

  function alphaOrder(str) {
   // nene way, i was close but the string was still split
    // var sortedStr = str.split('')    
    // for (var i = 0; i < sortedStr.length; i++) {
    //     sortedStr.sort()
    // }
    // return sortedStr.join()

    //tutorial way

    // var strToArray = str.split('');
    // var revArr = strToArray.sort()
    // var sortedStr = revArr.join('');
    // return sortedStr; 

    //all in one step 

    // return str.split('').sort().join('');   

    return [...str].sort().join('')
  }

  console.log(alphaOrder("hello"));
  console.log(alphaOrder("goodbye"));