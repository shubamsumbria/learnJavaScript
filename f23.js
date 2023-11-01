// Reverse a string

function reverseString(str)
{
    let resStr = "";
    
    for(let i = str.length - 1; i >= 0; i--)
    {
        let char = str[i];
        resStr += char;
    }
    
    return resStr;
}

str = "ThisIsAString";

let revStr = reverseString(str);
console.log(revStr);