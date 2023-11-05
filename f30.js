// Create a function that will return the number of words in a text

function countWords(text)
{
    let wasSeparator = true;
    let words = 0;
    
    for(let c of text)
    {
        if (isSeparator(c))
        {
            wasSeparator = true;
            continue;
        }
        if (wasSeparator)
        {
            words++;
            wasSeparator = false;
        }
    }
    
    return words;
}

function isSeparator(c)
{
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(c);
}

console.log(countWords("Hi, My name is Shubam and I am currently learning JavaScript."));