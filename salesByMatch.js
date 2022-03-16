function solution(n,ar) {
    let pairs = 0;
    let arnew = {}
    
    for (let i=0; i<ar.length; i++){
        arnew[ar[i]] ? arnew[ar[i]]+=1 : arnew[ar[i]]=1;
    
        if (arnew[ar[i]]%2===0){
            pairs ++
        }
    }
    return pairs
}
n = 9
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
document.write(solution(n,ar))