console.log("WELCOME TO EMPLOYEE WAGE COMPUTATION PROBLEM");

//declare constant
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

//function to get work hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

//declare variables
let empHrs = 0 ;
let empWage = 0 ;
//check employee presence using random function
let empCheck = Math.floor(Math.random()*10) % 3 ;
//call function
empHrs = getWorkingHours(empCheck);
//calculate daily wage
empWage = empHrs * WAGE_PER_HOUR ;
console.log("Employee Wage : "+empWage);
