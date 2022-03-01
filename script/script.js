//name swap

//challenge
    //teverse the order of two provided strings.


function nameSwap(str) {
    // //step 1 -> split string into an array
    // var stringToArray = str.split(' ');
    // //step 2 -> reverse array
    // var reverseArray = stringToArray.reverse();
    // //step 3 -> join array into string
    // var reverseString = reverseArray.join(' ');

    // //step 4 -> return string
    // return reverseString

    //alternative -> complete all these steps in one line of code
    return str.split(' ').reverse().join(' ');

}

console.log(nameSwap('Abraham Lincoln'))
console.log(nameSwap('Hank Aaron'))