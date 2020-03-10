//---------------------Array methods-----------------------------//
//foreach to erforms the specified action for each element in the arrray n
//OUTPUT--[5, 10, 15, 20, 25, 30]
const n = [1,2,3,4,5,6];
n.forEach(myFunc)
function myFunc(item,index,n){
  return n[index]=item*5;
}
console.log(n)



//map to call the provided function once for each element in the array1
//OUTPUT--[101, 102, 103, 104, 105]
array1 = [1,2,3,4,5];
mapvar= array1.map((p, i, array1) => {
  return p + 100;
});
console.log(mapvar)



//filter to Return the elements of an array that meets the required condition
//OUTPUT--[60, 67, 82]
const age=[10,22,21,60,67,82,12];
function myFunc(age){
  return age>=60;
}
console.log(age.filter(myFunc))


//Includes to check whether a string contains the characters of a specified string.
//OUTPUT--true
const alpha=["A","B","C","D","E"];
const ch=alpha.includes("C");
console.log(ch)



//indexOf to return first occurrence of a value in the array alpha
//OUTPUT--4
const ind=alpha.indexOf("E");
console.log(ind)



//Returns the index of the first element in the array findx
//OUTPUT-0
const findx=[10,20,30,40,50,60,70];
function myFunc2(findx){
  return findx<20;
}
console.log(findx.findIndex(myFunc2))



//find to return the element value. 
//OUTPUT--20
function myFunc(findx){
  return findx>10
}
console.log(findx.find(myFunc))




//reduce to reduce the array to a single value
//OUTPUT--55
const rc=[1,2,3,4,5,6,7,8,9,10];
function myFunc4(a,n){
  return a+n;
}
console.log(rc.reduce(myFunc4))




//slice to return a particular section of the array alpha
//OUTPUT--["E"]
const sl=alpha.slice(4,5);
console.log(sl);




//splice to remove elements from an array 
//OUTPUT--["A", "B", "C"]
const sp=alpha.splice(0,3);
console.log(sp)




// sort to sort out the array
//OUTPUT--1, 2, 3, 4, 5, 8
const st=[2,4,3,5,1,8];
const s=st.sort();
console.log(s)



//reverse the order of array elements 
//OUTPUT--8, 5, 4, 3, 2, 1 
const r=st.reverse();
console.log(r)



//concat to combine two arrays
//OUTPUT--"A", "E", "I", "O", "U", "ZZ", "WW", "VV", "MM"
const first=["A","E","I","O","U"];
const second=["ZZ","WW","VV","MM"];
const c=first.concat(second);
console.log(c)



//pop to delete last element of the array
//OUTPUT--U
console.log(first.pop())
console.log(first)



//push to append new elements
//OUTPUT-- A", "E", "I", "O", "T", "Q"
first.push("T","Q");
console.log(first)



//shift to remove the first element from an array and it will return it
//OUTPUT--A
console.log(first.shift())




//unshift to insert a new element at first index of the array
//OUTPUT--"NEW", "E", "I", "O", "T", "Q"
first.unshift("NEW")
console.log(first)