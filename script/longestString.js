













function longestWordLength(str) {
    var stringWithNoSpec = str.replace(/\W/g, ' ');

    var longestWord = '';
    var wordArray = stringWithNoSpec.split(' ');
     

    // for (var i = 0; i < wordArray.length; i++) {
    //     if (wordArray[i].length > longestWord.length) {
    //        longestWord = wordArray[i] 
    //     }
    // }

    //same same
    
    for (var count of wordArray) {
        if (count.length > longestWord.length) {
            longestWord = count;

        }
    }
    return longestWord.length
}

console.log(longestWordLength('Hi, where is the airport?'));
console.log(longestWordLength('Thanks for stopping by!'))