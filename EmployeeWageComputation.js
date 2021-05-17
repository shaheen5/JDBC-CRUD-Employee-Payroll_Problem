console.log("WELCOME TO EMPLOYEE WAGE COMPUTATION PROBLEM");
//declare constant
const IS_ABSENT = 0;
//check employee presence using random function
let empCheck = Math.floor(Math.random()*10) %2 ;
if (empCheck == IS_ABSENT){
    console.log("Employee is ABSENT");
    return;
}else{
    console.log("Employee is PRESENT");
}