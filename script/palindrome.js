// Determine if a string is a palindrome

// Challenge
    // A plaindrome is  a text that is spelled the same frint to back

// Examples
    // 'Eva, Can I Stab Bats In A Cave?' -> true
    // 'Was It A Rat I Saw?' -> true
    // 'A nut for a jar of tuna?' -> true

// Note
    // Ignore capitalization and spaces or any special characters.

// Tools
    // String.prototype.replace()
      // http://bit.ly/string-replace-method
    // Online Regex Tool
      // http://bit.ly/regular-expressions-javascript
      // https://regex101.com/
    // String.prototype.toLowerCase()
      // http://bit.ly/lowercase-string


      function isPalindrome(str) {
          // Step 1 -> use regular expressions to remove all non-word characters
          // e.g. "," with replace method

          var removeSpecial = str.replace(/[^\w]/g , '')
        //   console.log(removeSpecial)
          var allSameCase = removeSpecial.toLowerCase()
        //   console.log(allSameCase)

          // step3 -> reverse  string with built in functions/ for loop/for of loop and assign
          // to new variable ' reverseString'

        var reverseString = ''

        // for (var i = allSameCase.length -1; i >=0; i--) {
        //     reverseString += allSameCase[i];
        // }

        for (var letter of allSameCase) {
            reverseString = letter + reverseString
        }


        //    var reverseString = [...allSameCase].reverse().join('')
          // step 4 Return boolean as to whether our original string without special 
          // characters and case insensitive is equal to out reversed string
            // if (reverseString === allSameCase ) {
            //     return true
            // } else {
            //     return false
            // }
            return reverseString === allSameCase
      }

      console.log(isPalindrome('Eva, Can I Stab Bats In A Cave?'))
      console.log(isPalindrome('Was It A Rat I Saw?'))
      console.log(isPalindrome('A nut for a jar of tuna?'))