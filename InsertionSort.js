let x = [4,65,34,41,52,54,6,2,4,5,14,536,2354,22,23,3];
let y = [100,99,98,97,96,95,94,93];
let z = [Number.MAX_VALUE, Number.MIN_VALUE];

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++){
    let k = i
    let j = i - 1;
    while(arr[j] > arr[k]){
      let temp = arr[j]
      arr[j] = arr[k];
      arr[k] = temp;
      k--;
      j--;
    }
  }
}

insertionSort(x);
insertionSort(y);
insertionSort(z);

console.log(x);
console.log(y);
console.log(z);
