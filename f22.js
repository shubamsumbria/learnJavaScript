// Reverse an array

function reverseArray(arr)
{
    let resArr = [];
    
    for(let i = arr.length - 1; i >= 0; i--)
    {
        resArr.push(arr[i]);
    }
    
    return resArr;
}

let arr = [1, 2, 3];

let revArr = reverseArray(arr);
console.log(revArr);