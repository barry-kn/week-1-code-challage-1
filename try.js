 // Define constants for tax rates and other deductions
const KRA_TAX_RATES = [[0, 12298, 0],
[12299, 23885, 10],
[23886, 35472, 15],
[35473, 47059, 20],
[47060, 58646, 25],
[58647, Infinity, 30]];
const NHIF_RATES = [[0, 5999, 150],
[6000, 7999, 300],
[8000, 11999, 400],
[12000, 14999, 500],
[15000, 19999, 600],
[20000, 24999, 750],
[25000, 29999, 850],
[30000, 34999, 900],
[35000, 39999, 950],
[40000, 44999, 1000],
[45000, 49999, 1100],
[50000, 59999, 1200],
[60000, 69999, 1300],
[70000, 79999, 1400],
[80000, 89999, 1500],
[90000, 99999, 1600],
[100000, 109999, 1700],
[110000, 119999, 1800],
[120000, 129999, 1900],
[130000, 139999, 2000],
[140000, 149999, 2100],
[150000, 159999, 2200],
[160000, 169999, 2300],
[170000, 179999, 2400],
[180000, 189999, 2500],
[190000, 199999, 2600],
[200000, Infinity, 2700]];
const NSSF_RATE = 0.06;

// Get input for basic salary and benefits
const basicSalary = parseFloat(prompt("Enter your basic salary: "));
const benefits = parseFloat(prompt("Enter your benefits: "));

// Calculate gross salary
const grossSalary = basicSalary + benefits;

// Calculate PAYE tax
let payeTax = 0;
for (let i = 0; i < KRA_TAX_RATES.length; i++) {
if (grossSalary > KRA_TAX_RATES[i][0] && grossSalary <= KRA_TAX_RATES[i][1]) {
payeTax = (grossSalary - KRA_TAX_RATES[i][0]) * (KRA_TAX_RATES[i][2] / 100);
break;
}
}

// Calculate NHIF deduction
let nhifDeduction = 0
