let nums=[10,50,8,4,3,5,80,4];
let suma=0;
for(let i=0; i<nums.length;i++){
    if(nums[i]>10){
        suma+=nums[i];
    }
}
console.log("Suma Mayores a 10="+suma);
