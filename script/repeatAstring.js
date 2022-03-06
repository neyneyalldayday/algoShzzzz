








function repeatString(str, num) {
    // var finalString = ''

    // if (num <= 0 ) {
    //     return finalString;
    // }

    // for (var i = 1; i <= num; i++) {
    //     finalString += str;
    // }
    // return finalString;
    var finalString = ''
    if (num <= 0) {
        return finalString;
    }
    while(num > 0) {
        finalString += str;
        num--;
    }
    return finalString;

}


console.log(repeatString('car', 4));
console.log(repeatString('bar', 3));