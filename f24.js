// Create a function that will merge two arrays and return the result as a new array

function mergeArrays(ar1, ar2)
{
   let resArr = [];
   
   for(let elm of ar1)
   {
       resArr.push(elm);
   }
   
   for(let elm of ar2)
   {
       resArr.push(elm);
   }
   
   return resArr;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [11, 12, 13, 14, 15];

let mergeArr = mergeArrays(arr1, arr2);
console.log(mergeArr);