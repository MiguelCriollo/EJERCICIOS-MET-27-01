let nums=[1,1,0,0];
let suma=0;
for(let i=0; i<nums.length;i++){
    if(nums[i]==0){
        suma+=i;
    }
}
console.log("Suma Indices="+suma);
