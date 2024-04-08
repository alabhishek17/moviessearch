// 3.Write a function that takes an array of numbers and returns a 
// new array where each element is multiplied by its index if the index
// is even and divided by its index if the index is odd, using the map function.

// I/P = [1, 2, 3, 4, 5, 6, 7, 8];
let array=[1,2,3,4,5,6,7,8];
let newarry=array.map((val,index)=>{
    if(index%2===0){
        return index*val;
    }else{
        return Math.floor(val/index);
    }
    
})

console.log(newarry);