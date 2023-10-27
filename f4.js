// print all multiplication table with numbers from 1 to 10

const printTable = (n) => {
    for(let i=1; i<=10; i++){
        console.log(`${n} * ${i} = ${n*i}`)
    }
}

for(let i=1; i<=10; i++){
    printTable(i);
}
