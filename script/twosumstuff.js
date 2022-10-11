//double for loop way

function twoNumberSum(array, targetSum) {
    // Write your code here.
    
    for (var i = 0 ; i < array.length -1;  i++) {
     
      oneNumber = array[i]
  
      for (var j = i + 1  ; j < array.length ; j++ ){
        
        anotherNumber = array[j]
        
         if (oneNumber + anotherNumber === targetSum){
           
       return [oneNumber, anotherNumber]
          }   
      
      }   
   
    }
    return []
    
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;


  // hash table way
  function twoNumberSum(array, targetSum) {
    // Write your code here.
  
    let nums = new Set()
  
    for (let num of array) {
      let potentialMatch = targetSum - num
      if (nums.has(potentialMatch)) {
         return [potentialMatch, num]
      }
      nums.add(num)
    } 
    return []
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
 
  // finally the pointer solution
  function twoNumberSum(array, targetSum) { 
    // Write your code here.
    array.sort(function(a , b){return a-b})
    console.log(array)
    let left = 0
    console.log("first element", left)
    let right = array.length -1
    console.log("starting right", right)
    while(left < right){
      currentSum = array[left] + array[right];
      console.log("sum", currentSum)
      if (currentSum == targetSum)
        return [ array[left], array[right] ]
       if (currentSum < targetSum)
         left++;
       else
         right--;
         console.log("right", right)
      
      
    }
    return []
  }
  
    
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  