 var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var unigue=[]
var array=[]
for(var i of n){
 if(!unigue.includes(i)){
 unigue.push(i)
}
}
for(var j of unigue){
var count=0
 for (var k of n){
 if(j===k){
 count+=1
}
}
if (count>1){
array.push(j)
}
}
console.log(array)
