const fibs = (n, result = [0,1])=>{
    if(n == 0) return [];
    if(n == 1) return [1];

    if(result.length == n) return result;
    result.push(result[result.length - 1] + result[result.length - 2]);
    return fibs(n, result);
}
console.log(fibs(6))

const fibsRec = (n, result = [])=>{
    if(n == 1) return [0];
    if(n == 0) return [];
    let curr = 0;
    for(let i = 0; i < n; i++){
        result.push(curr);
        if(i == 0){
            curr = curr + 1;
        }
        else{
            curr = result[i] + result[i-1];
        }
    }
    return result;
}
console.log(fibsRec(6));