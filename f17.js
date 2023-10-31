// Calculate the sum of digits of a positive integer number

function sumDigits(n)
{
    let s = n.toString();
    let sum = 0;
    
    for(let char of s)
    {
        let digit = parseInt(char);
        sum += digit;
    }
    
    return sum;
}

let sum = sumDigits(123456789);
console.log("Sum: ", sum);