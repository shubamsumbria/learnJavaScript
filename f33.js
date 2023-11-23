// Create a function that will return an array with words inside a text

function getWords(text)
{
    let startWord = -1;
    let arr = [];
    
    for(let i = 0; i <= text.length; i++)
    {
        let chr = i < text.length ? text[i] : " ";

        if (!isSeparator(chr) && startWord < 0)
        {
            startWord = i;
        }
        
        if (isSeparator(chr) && startWord >= 0)
        {
            let word = text.substring(startWord, i);
            arr.push(word);
            startWord = -1;
        }
    }

    return arr;
}

function isSeparator(c)
{
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
    return separators.includes(c);
}

let text = "Create a function, that will return an array (of string), with the words inside the text";

console.log(getWords(text));