let nums=[10,50,8,4,3,5,8,4];
let suma=0;
for(let i=0; i<nums.length;i++){
    if((i%2)==0){
        suma+=nums[i];
    }
}
console.log("Suma Indices Pares="+suma);
