const mostSongsInPlaylist = function(arr) {
    // add your code here...
    
        for (let i = 0; i < arr.length; i ++){
           
            let next = arr[i] + 1;
            if (arr[i]  + next <= 60){
                let pointer = arr[0]
                pointer++;
            }
            return
        }

  };
  
  const arr = [4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3]; // 19 element array
  18 // output