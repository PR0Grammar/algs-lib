function merge(L, R, arr){
  let nLeft = L.length;
  let nRight = R.length
  
  //i is L's pointer, j is R's pointer
  let i = 0, j = 0, k = 0;
  
  while(i < nLeft && j < nRight){
    if(L[i] <= R[j]){
      arr[k++] = L[i++]
    }
    else{
      arr[k++] = R[j++];
    }
  }
  
  //Fill up the rest with the array that still has values
  //Only one will execute
  while(i < nLeft){
    arr[k++] = L[i++];
  }
  
  while(j < nRight){
    arr[k++] = R[j++];
  }
}

function mergeSort(arr){
  if(arr.length < 2)
    return;
  let mid = Math.floor(arr.length / 2);
  
  let left = []
  let right = []
  
  //0 .. mid - 1
  for(let i = 0; i < mid; i++){
    left[i] = arr[i];
  }
  //mid ... n
  for(let i = mid; i < arr.length; i++){
    right[i - mid] = arr[i];
  }
  
  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
}


let x = [3,534,234,5432,432,4,12,312,345,64,45,1,4,64,352,53,13];
let y = [3,2,1]

mergeSort(x);
mergeSort(y);

console.log(x);
console.log(y);
