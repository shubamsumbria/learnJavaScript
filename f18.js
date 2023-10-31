// Print the first 100 prime numbers

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

function printPrimes(nPrimes)
{
    let n = 1;
    let i = 2;
    
    while(n <= nPrimes)
    {
        if (isPrime(i))
        {
            console.log(n, " -> ", i);
            n++;
        }
        i++;
    }
}

printPrimes(100);
