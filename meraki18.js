var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var even_count=0
var even_sum=0
var odd_count=0
var odd_sum=0
for (var i of elements){
    if (i%2===0){
        even_count+=1
        even_sum+=i
    }
    else{
        odd_count+=1
        odd_sum+=i
    }
}
console.log(even_count)
console.log(odd_count)
console.log(even_sum)
console.log(odd_sum)
console.log((even_sum+odd_sum)/2)