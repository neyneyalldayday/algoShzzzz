let arr = [82, 22, -4, 21, 1, 8 ]
key = 8



const findNum = function(arr, key) {
    let shit = arr;
  for (let i=0; i < shit.length; i++){

   
    if (shit[i] == key)     
        return indexOf(shit)  
  }
  return -1
}
findNum()
console.log(findNum([82, 22, -4, 21, 1, 8 ], 8))