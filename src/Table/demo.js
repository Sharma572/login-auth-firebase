let a =[4,4,2,3,3,5,5];

let sum = a.reduce((prev,cur)=>{
   prev[cur] = (prev[cur] || 0) +1
   return prev
},{})
console.log(sum);
let res = ''
let findDublicate=(a)=>{
for(let i = 0; i<=a.length;i++){
for(let j = 1; i<=a.length;i++){
  if(a[i] - a[j] == 0 ){
   res = `${a[i]} - ${a[j]} = 0`
   i+2;
   j+2;
  }
}
}
}
findDublicate(a)

let obj ={
    Name : 'Raunk',
    EmpId : 1012,
    Telephone : 1012,
}
console.log(obj.name);