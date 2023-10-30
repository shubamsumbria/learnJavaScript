// Calculate the average of the numbers in an array of numbers

let arr = [1,3,5,7,9,11];
let sum = 0;

for(i in arr){
    sum += arr[i];
}

let avg  = sum/arr.length;
console.log("Average:" , avg);