const fibs = (n, result = [0,1])=>{
    if(n == 0) return [];
    if(n == 1) return;

    if(result.length == n) return result;
    result.push(result[result.length - 1] + result[result.length - 2]);
    return fibs(n, result);
}
console.log(fibs(9))