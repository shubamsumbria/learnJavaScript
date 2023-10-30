// Find the maximum number in an array of numbers

let arr = [1,2,3,4,5,-1,-2,-3,-4,-5];

function findMax(arr){
    let max =arr[0];
    for(e of arr){
        if(e>max){
            max = e;
        }
    }
    return max
}

console.log(findMax(arr))