// Create a function that will capitalize the first letter of each word in a text

function captializeWords(text)
{
    let updateText = "";
    
    for(let i = 0; i < text.length; i++)
    {
        let currChr = text[i];
        let prevChr = i > 0 ? text[i - 1] : " ";
        
        if (!isSeparator(currChr) && isSeparator(prevChr))
        {
            currChr = currChr.toUpperCase();
        }
        
        updateText += currChr;
    }
    
    return updateText;
}

function isSeparator(chr)
{
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(chr);
}

console.log(captializeWords("Create a function that will capitalize the first letter of each word in a text"));