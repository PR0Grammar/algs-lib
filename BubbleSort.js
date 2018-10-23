let x = [45,245,134,234,562,423,5,1,4,31,53,55,43,34,12,2,3,3,3,54,3];

function bubbleSort(arr){
  let notSorted = true;
  let j = 0;
  
  while(notSorted){
    notSorted = false;
    j++;
    for(let i = 0; i < arr.length - j; i++){
      if(arr[i] > arr[i+1]){
        notSorted = true;
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  }
}

bubbleSort(x);

console.log(x);
