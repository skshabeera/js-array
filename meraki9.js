//  var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var max_num=0
//  var max2_num=0
//  for (var i=0;i<numbers.length;i++){
//     if (max_num<numbers[i]){
//         max2_num=max_num
//         max=numbers[i]

//    }
//     else if (max_num>numbers[i] &&max2_num<numbers[i]){
//         max2_num=numbers[i]

//  }
//  }
// console.log(max_num)



var numbers=[509, 40, 23, 70, 560, 12, 5, 10, 7]
var max=0;
var second_max=0;
for (var i =0;i<numbers.length;i++){
if (max<numbers[i]){
if (second_max<max){
second_max=max;
}
max=numbers[i];
}
else{
if (second_max<numbers[i]){
second_max=numbers[i];
}
}
}


console.log(second_max);



