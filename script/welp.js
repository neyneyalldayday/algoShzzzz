var s = "MCMXCIV"



var romanToInt = function(s) {
    
    let conversion = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    console.log(conversion)
    
    let number = 0
    
    for (let i = 0; i < s.length; i++){
        if (conversion[s[i]] < conversion[s[i+1]]) {   
            console.log(conversion)          
            number -= conversion[s[i]]           
        } else {
            number += conversion[s[i]]
        }
    }
    
    console.log("fuck")
    
   
  
};