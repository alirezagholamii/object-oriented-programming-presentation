let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate)
}
 
// vs

let empolyee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate)
    }
}

// "The best function are those with no parameters!"
// Uncle Bob - Robert C Martin