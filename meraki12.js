// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// var elements=[]
// for (var i of list1){
//     if (!list2.includes(i)){
//     elements.push(i)
// }
// }
// console.log(elements)
var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
elements=[]
for(var i in list1){
if (!list2.includes(list1[i])){
elements.push(list1[i])
}
}
console.log(elements);

