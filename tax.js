/*output 
1)payee
2)nhif deduction
3)nssf deduction
4)groos salary
5)net salary)

needed rates
1)nhif deduction
2) nssf deduction
3)tax 

input from the user
1)basic salary
2)benefits*/

/*computing
1)grossSalary = basicSalary + benefits
2)payee =   taxRate * grossSalary 
3)nhifAmount = grossSalary * nhifDeduction
4)nssfAmount = grossSalary * nssfDeduction
5)netSalary = grossSalary - payee - nhifAmount - nssfAmount
*/

//  tax rates & deduction amounts
const taxRate = 0.13;
const nhifDeduction = 0.01;
const nssfDeduction = 0.02;

// propmt the ndividual’s  for their basic salary and their benefits
const basicSalary = parseFloat(prompt("what is  your basic salary: "));
const benefits = parseFloat(prompt("Your  benefits: "));

// getting the gross salary by
const grossSalary = basicSalary + benefits;

// getting the payee by
const payee =   taxRate * grossSalary  ;

// getting the NHIF deduction by
const nhifAmount = grossSalary * nhifDeduction;

// getting the NSSF deduction by 
const nssfAmount = grossSalary * nssfDeduction;

// Calculate the net salary by
const netSalary = grossSalary - payee - nhifAmount - nssfAmount;

// printing  output
console.log(`Payee : ${payee}`);
console.log(`NHIF Deduction: ${nhifAmount}`);
console.log(`NSSF Deduction: ${nssfAmount}`);
console.log(`Gross salary: ${grossSalary}`);
console.log(`Net salary: ${netSalary}`);


