// Rotate an array to the right 1 position

function rotateRight(arr)
{
    let last = arr.pop();
    arr.unshift(last);
}

let arr = [1, 2, 3];

rotateRight(arr);
console.log(arr);