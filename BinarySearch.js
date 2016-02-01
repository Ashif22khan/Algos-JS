/*
    Here I am trying to point out the most popular(incorrect) implementation of           binary search algorithm as well as the correct one(with a small tweak). 
*/

//Most Popular(Incorrect) Implementation of binary search


var binSearchIncorrect=function(inputArr,key){
    var lB=0;
    var uB=inputArr.length-1;
    while(lB<=uB){
        var mid=(lB+uB)/2;
        if(key==inputArr[mid])return mid;
        else if(key<inputArr[mid])uB=mid-1;
        else lB=mid+1;
    }
    return -1;
}
var myArr=[1,2,4,6,7,8,9,11,13];////Input array
binSearchIncorrect(myArr,6);

/*  The problem in the above code is 
    with the statment var mid=(lB+uB)/2;
    it may lead to an overflow........
    We can overcome this problem 
    by replacing the given statement 
    with var mid=lB+(uB-lB)/2;......
*/

//The Correct Implementation of binary search

var binSearchCorrect=function(inputArr,key){
    var lB=0;
    var uB=inputArr.length-1;
    while(lB<=uB){
        var mid=lB+(uB-lB)/2;
        if(key==inputArr[mid])return mid;
        else if(key<inputArr[mid])uB=mid-1;
        else lB=mid+1;
    }
    return -1;
}
var myArr=[1,2,4,6,7,8,9,11,13];////Input array
binSearchIncorrect(myArr,6);


