// first challenge//

function alwaysHungry(arr) {
    var arr;
    for (var i=0 ; i<arr.length ; i++){
        if(arr[i]=="food"){
            console.log("yummy")
        }
        else if(arr[i]!="food"){
            console.log("I'm hungry")
        }
    }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

//second//
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i=0 ; i<arr.length ; i++){
        if(arr[i]>5){
            filteredArr.push(arr[i]);
        }
        
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

 // third//
 function betterThanAverage(arr) {
    var sum = 0;
    var count =0;
    for(var i=0 ; i<arr.length ; i++){
        sum=sum + arr[i];
        var average=sum/arr.length;
    }
        for(var i=0 ; i<arr.length ; i++){
            if(arr[i]>average)
            count++;
        }
            
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 

//forth

function reverse(arr) {
    var left = 0;
    var right = arr.length - 1;
    while(left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    // your code here
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);

console.log(result);


//fifth
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i=0 ; i<n-2 ; i++){
        var before=fibArr[fibArr.length-2];
        var after=fibArr[fibArr.length-1];
        fibArr.push(before+after);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);
 // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


