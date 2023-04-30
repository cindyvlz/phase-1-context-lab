/* Your Code Here */

function createEmployeeRecord(arrayOfEmployee){
    const testEmployee = {
        firstName: arrayOfEmployee[0],
        familyName: arrayOfEmployee[1],
        title: arrayOfEmployee[2],
        payPerHour: arrayOfEmployee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return testEmployee;
} 
    
function createEmployeeRecords(array){
    let employeeRecords = [];
    array.forEach(element => {
        employeeRecords.push(createEmployeeRecord(element))
    })
    return employeeRecords;
}
function createTimeInEvent(dateStamp){
    const [date, hour] = dateStamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    });
    return this
}
function createTimeOutEvent(dateStamp){
    const [date, hour] = dateStamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    });
    return this
}
function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour)/100
}
function wagesEarnedOnDate(date){
    return (hoursWorkedOnDate.call(this,date) * this.payPerHour);
}

function calculatePayroll(empRecords) {
    const totalForEachEmployee = empRecords.map(record => allWagesFor.call(record))
    return totalForEachEmployee.reduce((total, empTotal) => total + empTotal)
}

function findEmployeeByFirstName(src, name){
    return src.find(record => record.firstName === name);
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

