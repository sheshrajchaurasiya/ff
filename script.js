/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

let arr2 = [
  {id: 1, name: "lovnish", age:"25", marks:"75" },
  {id: 2, name: "abhi",    age:"15", marks:"90" },
  {id: 3, name: "amit",  age:"16", marks:"60" },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
 arr.map(val=>{
  if(val.marks > 50)
  console.log(val.name);
 })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
arr.forEach(val=>{
  if(val.marks > 50);
  console.log(val.name);
})
}

function addData() {
  //Write your code here, just console.log
  let obj = {id:4,name:"susan",age:"20",marks:45};
  arr.push(obj);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let arr3 = arr.filter(val=>{
    return val.marks < 50
  })
  console.log(arr3);
}

function concatenateArray() {
  //Write your code here, just console.log
  let contt = arr.concat(arr2);
  console.log(contt);
}

PrintStudentswithMap();
PrintStudentsbyForEach();
addData();
removeFailedStudent();
concatenateArray();


