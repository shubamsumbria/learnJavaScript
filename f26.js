// Create a function that will receive an array of numbers as argument and will return a new array with distinct elements


function getDistinctElements(arr)
{
    let arr2 = [];
    
    for(let i = 0; i < arr.length; i++)
    {
        if (!isInArray(arr[i], arr2))
        {
            arr2.push(arr[i]);
        }
    }
    
    return arr2;
}

function isInArray(n, arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        if (arr[i] === n)
            return true;
    }
    
    return false;
}

let distArr = getDistinctElements([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
console.log(distArr);