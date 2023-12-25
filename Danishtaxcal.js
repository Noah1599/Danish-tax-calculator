// Salary
const hourlyWage = 131.4;
const hoursWorkedPerDay = 3;
const daysWorkPerWeek = 2;
const weeksPerYear = 52;

// Tax Rates
const su = 0;
const basicTaxRate = 0.1206;
const municipalTaxRate = 0.2552;
const churchTaxRate = 0.0089;
const personalDeduction = 49700;
const employmentContributionRate = 0.08;
const taxCeiling = 0.5207;
const topTaxThreshold = 588900;
const topTaxRate = 0.15;

// The program starts here
const paidTax = basicTaxRate + municipalTaxRate + churchTaxRate;
const maximumTaxRate = paidTax + topTaxRate;
const totalHours = hoursWorkedPerDay * daysWorkPerWeek * weeksPerYear;
const grossSalary = totalHours * hourlyWage + su * 12;

console.log("Tax before top tax: ", paidTax * 100, "%");
console.log("Tax after top tax: ", maximumTaxRate * 100, "%\n");
console.log("Total hours worked per year: ", totalHours, "and gross salary is: ", grossSalary, "kr");

const withoutEmploymentContribution = grossSalary - (grossSalary * employmentContributionRate);
let withoutPersonalDeduction = withoutEmploymentContribution < personalDeduction ?
                                withoutEmploymentContribution :
                                withoutEmploymentContribution - personalDeduction;

const paysTopTax = withoutPersonalDeduction > topTaxThreshold;

if (paysTopTax) {
    const topTaxPaidOn = withoutPersonalDeduction - topTaxThreshold;
    console.log("\n\ntop tax paid on: ", parseInt(topTaxPaidOn), "kr");
    const moneyWithNormalTax = topTaxThreshold - (topTaxThreshold * paidTax);
    console.log("Normal tax paid on: ", parseInt(topTaxThreshold), "kr");
    console.log("\nTop tax paid: ", parseInt(topTaxPaidOn * maximumTaxRate), "kr");
    console.log("Normal tax paid: ", parseInt(topTaxThreshold * paidTax), "kr\n");
    const topTaxPaid = topTaxPaidOn - (topTaxPaidOn * maximumTaxRate);
    const moneyAfterTax = moneyWithNormalTax + topTaxPaid + personalDeduction;
    console.log("Money after tax: ", parseInt(moneyAfterTax), "kr");
    console.log("\nMoney paid in tax: ", parseInt(grossSalary - moneyAfterTax), "kr");
    console.log("Money after tax: ", parseInt(moneyAfterTax), "kr");
} else {
    console.log("\nMoney subject to tax: ", parseInt(withoutPersonalDeduction), "kr");
    if (withoutPersonalDeduction < personalDeduction) {
        withoutPersonalDeduction = withoutPersonalDeduction;
    } else {
        withoutPersonalDeduction = withoutPersonalDeduction - (withoutPersonalDeduction * paidTax) + personalDeduction;
    }
    console.log("\nMoney after tax: ", parseInt(withoutPersonalDeduction), "kr");
    console.log("Paid money in tax: ", parseInt(withoutEmploymentContribution - withoutPersonalDeduction), "kr");
}
