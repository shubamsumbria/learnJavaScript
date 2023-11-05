// Calculate the sum of first 100 prime numbers

function sumPrimes(n)
{
    let foundPrimes = 0;
    let i = 2;
    let sum = 0;
    
    while(foundPrimes < n)
    {
        if (isPrime(i))
        {
            foundPrimes++;
            sum += i;
        }
        
        i++;
    }
    
    return sum;
}

function isPrime(n)
{
    if (n < 2)
        return false;
        
    if (n == 2)
        return true;
    
    let maxDiv = Math.sqrt(n);
    
    for(let i = 2; i <= maxDiv; i++)
    {
        if (n % i === 0)
        {
            return false;
        }
    }
    
    return true;
}

let n = 100;
console.log("Sum of first ", n, " primes is ", sumPrimes(10));