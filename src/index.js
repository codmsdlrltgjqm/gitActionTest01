// computes a factorial of a given positive integer
function factorial(n) { // 5! = 5*4*3*2*1 = 120

    if( n < 0 ) {
        throw new Error('n must be a positive integer');
    }

 
    if( n === 0 ) {
        return 1;
    }

    return n * factorial(n - 1); //재귀적 호출
}

module.exports = factorial;