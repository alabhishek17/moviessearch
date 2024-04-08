function stringswap(str){
    let left=0;
    let right=str.length-1;
    
    let revers=[]
    while(left<right){
        let temp=left;
        left=right;
        right=temp;
        revers.push(left);
        return revers;
    }
    
}
console.log(stringswap("hello"));