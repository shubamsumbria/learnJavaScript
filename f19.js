// Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    let maxDiv = Math.sqrt(n);
    
    for(let i = 2; i <= maxDiv; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}

function getPrimes(nPrimes, startAt)
{
    let arr = [];
    let i = startAt;
    
    while(arr.length < nPrimes)
    {
        if (isPrime(i))
        {
            arr.push(i);
        }      
        i++;
    }  
    return arr;
}

console.log(getPrimes(10, 100));