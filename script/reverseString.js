// Reverse a String

// Challenge
    //Reverse the provided string.
    // you may need to turn the strin into an array before you can reverse it
    // your result must be a string


// Examples
    // 'car' -> 'rac'
    // 'bar' -> 'rab'

// Approach 1 - // using built in functions

// tools
    // String.prototype.split()
    // http://bit.ly/string-split
// Array.prototype.reverse()
    // http://bit.ly/array-reverse-method
// array.prototype.join()
    // http://bit.ly/array-join

    function revString(str) {

        //simple way first
    //   return [...str].reverse().join('') 

    // long way second

    // var newString = str.split('')
    // var backwards = newString.reverse()
    // var finalString = backwards.join('')
    // return finalString

    // for loop

    // var string = ''

    // for (var i = str.length -1; i >= 0; i --){
    //     string += str[i]

    // }

    // return string;

    //for of loop

    var reverseString = '';

    for (var letter of str) {
        reverseString = letter + reverseString;
    }
    return reverseString;
    }

    console.log(revString('car'));
    console.log(revString('bar'));
