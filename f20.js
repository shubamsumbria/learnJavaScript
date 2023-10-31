// Rotate an array to the left 1 position

function rotateLeft(arr)
{
    let first = arr.shift();
    arr.push(first);
}

let arr = [1, 2, 3, 4, 5];
rotateLeft(arr);
console.log(arr);