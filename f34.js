// Create a function to convert a CSV text to a “bi-dimensional” array

function csvToArray(data)
{
    let arrRow = data.split("\n");

    for(let i = 0; i < arrRow.length; i++)
    {
        let arrColumn = arrRow[i].split(";");
        arrRow[i] = arrColumn;
    }
    
    return arrRow;
}

let data = "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";

let arr = csvToArray(data);
console.log(JSON.stringify(arr));