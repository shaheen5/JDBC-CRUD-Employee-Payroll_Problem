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
let empDailyWageArray = new Array(); //declare array
let empDailyWageMap = new Map();     //declare map
let empDailyHrsMap = new Map();

//calculating wages for a month or till no. of working hours 
while (totalEmpHrs <= MAX_HRS_IN_MONTH  && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    //check employee presence using random function
    let empCheck = Math.floor(Math.random()*10) % 3 ;
    //call function to get employee work hours
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    //adding daily wages in array
    empDailyWageArray.push(calculateDailyWage(empHrs));
    //adding day wise no of hours worked in map
    empDailyHrsMap.set(totalWorkingDays,empHrs);
    //adding wages to map day wise
    empDailyWageMap.set(totalWorkingDays,calculateDailyWage(empHrs));
}
//calculate wage
let empWage = calculateDailyWage(totalEmpHrs);
console.log("UC6 - Total Days : "+totalWorkingDays+" Total Hours : "+totalEmpHrs+" Employee Wage : "+empWage);

//Array Helper Functions
// UC 7A - Calculate Total Wage Using Array forEach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage +=dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("UC7A - Total Days : "+totalWorkingDays+" Total Hours : "+totalEmpHrs+" Employee Wage : "+totEmpWage);

//using reduce  function to calculate total wage
function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce : "+empDailyWageArray.reduce(totalWages,0));

//UC 7A - Calculate Wage Using Map
console.log(empDailyWageMap);       //display wage map
console.log("UC7A - Emp Wage Map Total Wage : "+
            Array.from(empDailyWageMap.values()).reduce(totalWages,0));

// UC 7B - Show the Day along with Dail Wage using Array map helper function
let dailyCounter = 0;
function mapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter + "=" + dailyWage;
}
let mapDayWithWageArray = empDailyWageArray.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArray);

//UC 7C - Show Days When Full Time Wage of 160 were earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArray=mapDayWithWageArray.filter(fullTimeWage);
console.log("UC7C - Daily Wage Filter When Full Time Wage Earned");
console.log(fullDayWageArray);

//UC 7D - Find the first occurence when full time wage was earned using find function
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D - First time Fulltime wage was earned on day: "+
            mapDayWithWageArray.find(findFulltimeWage)); 

// UC 7E - Check if every element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC 7E - Check all element have full time wage: "+
            fullDayWageArray.every(isAllFullTimeWage));

//UC 7F - Check if there is any part time wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC 7F - Check if any part time wage: "+
            mapDayWithWageArray.some(isAnyPartTimeWage)); 

//UC 7G - Find the number of days the employee worked
function totalDaysWorked(numofDays, dailyWage){
    if(dailyWage > 0) return numofDays+1;
    return numofDays;
}
console.log("UC 7G - Number of Days Employee worked: "+
            empDailyWageArray.reduce(totalDaysWorked, 0));

//UC9 Arrow Functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArray.filter(dailyWage => dailyWage > 0)
                    .reduce(findTotal, 0);
console.log("UC 9 - Employee Wage with arrow: "+" Total Hours: "+
            totalHours + " Total Wages: "+ totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key , map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: "+fullWorkingDays);
console.log("Part Working Days: "+partWorkingDays);
console.log("Non Working Days: "+nonWorkingDays);
