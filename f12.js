// Create a function that receives an array of numbers and returns an array containing only the positive numbers

let arr = [1,2,3,4,5,-1,-2,-3,-4,-5];

function getPositiveArray(arr){
    let positiveArray = [];
    for(i in arr){
        if(arr[i] >= 0){
            positiveArray.push(arr[i]);
        }
    }
    return positiveArray;
}

console.log(getPositiveArray(arr));


function getPositiveOfArray(arr){
    let positiveArray = [];
    for(e of arr){
        if(e >= 0){
            positiveArray.push(e);
        }
    }
    return positiveArray;
}

console.log(getPositiveOfArray(arr));

function getPositivesByFilter(arr){
    return arr.filter(el => el >= 0);
}

console.log(getPositivesByFilter(arr))