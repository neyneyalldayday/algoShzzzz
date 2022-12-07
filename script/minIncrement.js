var arr = [3,2,1,2,1,7]




function minInc (){
    let counter = {}

    let increment = 0;

    for (let i = 0; i < arr.length; i++){
        while (counter[arr[i]] === 1) {
            arr[i] = arr[i] + 1;
            increment++;
        }
        counter[arr[i]] = 1
    }
   console.log(increment)
}
minInc()

