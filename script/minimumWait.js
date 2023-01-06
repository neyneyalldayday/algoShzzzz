function minimumWaitingTime(queries) {
    // Write your code here.
    let totalWait = []
    let sQ = queries.sort( function (a,b) {
      return a - b
    })
  
     for (let i = 0; i < sQ.length; i++){
       let queryT = sQ[i] * (sQ.length - i - 1)
       totalWait.push(queryT)
           
     }
     let sumofWait = totalWait.reduce((acc, currentV) => acc + currentV)
       
    return sumofWait;
  }
  
  
  // Do not edit the line below.
  exports.minimumWaitingTime = minimumWaitingTime;