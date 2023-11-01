// Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function mergeExclusive(arr1, arr2)
{
    let resArr = [];
    
    for(let elm of arr1)
    {
        if (!arr2.includes(elm))
        {
            resArr.push(elm);
        }
    }
    
    for(let elm of arr2)
    {
        if (!arr1.includes(elm))
        {
            resArr.push(elm);
        }
    }
    
    return resArr;
}

let arr1 = [1, 2, 3, 10,11, 12];
let arr2 = [2, 3, 4, 11, 12, 13];

let exArr = mergeExclusive(arr1, arr2);
console.log(exArr);