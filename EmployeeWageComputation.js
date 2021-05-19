console.log("WELCOME TO EMPLOYEE WAGE COMPUTATION PROBLEM");

//declare constant
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;


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
//function to calculate daily wage of employees
function calculateDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

//declare variables
let totalEmpHrs = 0 ;
let totalWorkingDays = 0 ;
let empDailyWageArray = new Array();

//calculating wages for a month or till no. of working hours 
while (totalEmpHrs <= MAX_HRS_IN_MONTH  && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    //check employee presence using random function
    let empCheck = Math.floor(Math.random()*10) % 3 ;
    //call function to get employee work hours
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calculateDailyWage(empHrs));
}
//calculate wage
let empWage = calculateDailyWage(totalEmpHrs);
console.log("Total Days : "+totalWorkingDays+" Total Hours : "+totalEmpHrs+" Employee Wage : "+empWage);
