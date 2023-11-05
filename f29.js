// Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

function add(sNumber1, sNumber2)
{
    let s = "";
    let carry = 0;
    
    let maxSize = Math.max(sNumber1.length, sNumber2.length);
    
    for(let i = 0; i < maxSize; i++)
    {
        let digit1 = digitFromRight(sNumber1, i);
        let digit2 = digitFromRight(sNumber2, i);
        
        let sum = digit1 + digit2 + carry;
        let digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;
        
        s = digitSum.toString() + s;
    }
    
    if (carry > 0)
        s = carry + s;
    
    return s;
}

function digitFromRight(s, digitNo)
{
    if (digitNo >= s.length)
        return 0;
        
    let char = s[ s.length - 1 - digitNo ];
    return parseInt(char);
}

let n1 = "2909034221912398942349";
let n2 = "1290923909029309499";

console.log(n1, "\n", n2, "\n", add(n1, n2));