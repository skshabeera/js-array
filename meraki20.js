var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
var unigue=[]
for (var i of char_list){
if (!unigue.includes(i)){
unigue.push(i)
}
}
console.log(unigue)
for ( var j of unigue){
var count=0
for ( var k of char_list){
if(j===k){
count+=1
}
}
console.log(j,count,"time")
}
