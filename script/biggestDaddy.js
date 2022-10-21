var arr = [3, 1, 17, 5, 6];



function biggestDaddy() {
let daddy = []

for (let i = 0; i  < arr.length; i++) {
  
    if (arr[i] === Math.max()){
        daddy.push(arr[i])
    }
 
   console.log(daddy)

    
}

}
biggestDaddy()