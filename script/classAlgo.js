var expect = chai.expect;

describe("characterCount", function() {
  it("should return an object containing the counts for each letter in a given string", function() {
    var str = "she sells sea shells by the sea shore";

    var result = characterCount(str);

    expect(result).to.eql({
      s: 8,
      h: 4,
      e: 7,
      " ": 7,
      l: 4,
      a: 2,
      b: 1,
      y: 1,
      t: 1,
      o: 1,
      r: 1
    });

    str = "peter piper picked a pack of pickled peppers";

    result = characterCount(str);

    expect(result).to.eql({
      p: 9,
      e: 7,
      t: 1,
      r: 3,
      " ": 7,
      i: 3,
      c: 3,
      k: 3,
      d: 2,
      a: 2,
      o: 1,
      f: 1,
      l: 1,
      s: 1
    });
  });
});

var characterCount = function(str) {

    let charMap = {};

    for (let i = 0 ; i < str.length; i++) {
        let char = str[i];

        if(char in charMap) {
            charMap[char]++;
        } else {
            charMap[char] =1;
        }
    }
    return charMap
};

//Write a function that takes an array of numbers as a parameter, and returns the largest number present in the array.
//For example, given the following array:
//arr = [3, 1, 17, 5, 6];
//The following number should be returned:
//17;

const LargestNumber = function(arr) {
  arr = [3, 1, 17, 5, 6];
 return Math.ceil(arr) 





}

//WOOOOF