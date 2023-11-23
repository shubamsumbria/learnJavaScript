// Calculate the sum of numbers received in a comma delimited string 

function sumComma(str)
{
    let arr = str.split(",");
    
    let sum = 0;
    
    for(let e of arr)
    {
        sum += parseFloat(e);
    }
    
    return sum;
}

console.log(sumComma("1, 2, 3, 4, 5, 1.1, 1.2, 1.3, 1.4, 1.5"));