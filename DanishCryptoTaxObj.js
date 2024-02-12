//this is to calculate the Danish CryptoTax
// This is a simple script to calculate the Danish CryptoTax
// The script is based on the Danish Tax Authorities guidelines
// The script is not guaranteed to be correct
// The script is not guaranteed to be up to date

//danish crypto tax runs on the FIFO principle


/*profit: cryptoProfit,
taxToPay: cryptoProfit * cryptoTaxRate,
lossAfterDeduction: cryptoProfit - cryptoProfit * cryptoTaxRate,
taxProcetage: cryptoTaxRate * 100,
bought: cryptoBoughtPrice,
sold: cryptoSoldValue,
holdtime: cryptoHoldingTimeInDays*/

var obj =[];
const cryptoTax = (startingProfitThisYear,cryptoAmount, cryptoenterPrice, cryptoDate, cryptoSoldPrice, cryptoSoldDate) => {
    let type = 0;
    let cryptoTaxRate = 0;
    const startingTaxRate = 0.27;
    const maximumTaxRate = 0.53;
    const lossReduction = 0.27;
    const maxMoneyBeforeTax = 51000;
    const maxMoneyBeforeTopTax = 510000;
    // The script starts here
    const cryptoBoughtPrice = cryptoAmount * cryptoenterPrice;

    const cryptoSoldValue = cryptoAmount * cryptoSoldPrice;

    const cryptoProfit = cryptoSoldValue - cryptoBoughtPrice;

    const cryptoHoldingTimeInDays = (cryptoSoldDate - cryptoDate) / (1000 * 60 * 60 * 24);
    
    if (cryptoProfit < 0) {
        cryptoTaxRate = lossReduction;
        type = 1;
    }
    else if (startingProfitThisYear + cryptoProfit <= maxMoneyBeforeTax) {
        cryptoTaxRate = 0;
        type = 2;
    }else if (startingProfitThisYear + cryptoProfit <= maxMoneyBeforeTopTax) {
        cryptoTaxRate = startingTaxRate;
        type = 2;
    } else {
        cryptoTaxRate = maximumTaxRate;
        type = 2;
    }

    if (type==0) return console.log("error, something went wrong, please try again");

    if (type==1) {
        obj[cryptoSoldDate] = 
        {

            profit: cryptoProfit,
            tax: cryptoProfit * cryptoTaxRate,
            lossAfterDeduction: cryptoProfit - cryptoProfit * cryptoTaxRate,
            taxReductionProcetage: cryptoTaxRate * 100,
            bought: cryptoBoughtPrice,
            sold: cryptoSoldValue,
            holdtime: cryptoHoldingTimeInDays,
            profitThisYear: startingProfitThisYear + ( cryptoProfit - cryptoProfit * cryptoTaxRate)

        };  
    }else if (type==2) {
        obj[cryptoSoldDate] = 
        {
            profit: cryptoProfit,
            tax: cryptoProfit * cryptoTaxRate,
            lossAfterDeduction: cryptoProfit - cryptoProfit * cryptoTaxRate,
            taxProcetage: cryptoTaxRate * 100,
            bought: cryptoBoughtPrice,
            sold: cryptoSoldValue,
            holdtime: cryptoHoldingTimeInDays,
            profitThisYear: startingProfitThisYear + cryptoProfit
        };
        //now we set the name of the array to the date
        
    }
   
    
    
}
//convert the date to the right format


//cryptotax(profitThisYear, crypto amout, crypto price, new Date(bought year, borught mounth, bought day), crypto sold price, new Date(sold year, sold mounth, sold day))
cryptoTax(0,1, 100, new Date(2020, 0, 1), 50, new Date(2020, 11, 31));
cryptoTax(obj[new Date(2020, 11, 31)].profitThisYear,1, 10, new Date(2020, 0, 1), 5000, new Date(2021, 11, 31));
cryptoTax(obj[new Date(2021, 11, 31)].profitThisYear,1, 300, new Date(2020, 0, 1), 600, new Date(2022, 11, 31));
cryptoTax(obj[new Date(2022, 11, 31)].profitThisYear,1, 500, new Date(2020, 0, 1), 5100, new Date(2023, 11, 31));
cryptoTax(obj[new Date(2023, 11, 31)].profitThisYear,1, 200, new Date(2020, 0, 1), 150, new Date(2024, 11, 31));

console.log(obj);
console.log("hhhhh");
//we want to log the profit on the day 2023, 12, 31
console.log(obj[new Date(2023, 11, 31)].profit);
