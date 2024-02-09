//this is to calculate the Danish CryptoTax
// This is a simple script to calculate the Danish CryptoTax
// The script is based on the Danish Tax Authorities guidelines
// The script is not guaranteed to be correct
// The script is not guaranteed to be up to date

//danish crypto tax runs on the FIFO principle


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
        const l = 
        [{
            id: cryptoSoldDate,
            loss: cryptoProfit,
            taxReduction: cryptoProfit * cryptoTaxRate,
            lossAfterDeduction: cryptoProfit - cryptoProfit * cryptoTaxRate,
            taxReductionProcetage: cryptoTaxRate * 100,
            bought: cryptoBoughtPrice,
            sold: cryptoSoldValue,
            holdtime: cryptoHoldingTimeInDays
        }];   
        console.log(l);
    }else if (type==2) {
        const w = 
        [{
            id: cryptoSoldDate,
            profit: cryptoProfit,
            taxToPay: cryptoProfit * cryptoTaxRate,
            lossAfterDeduction: cryptoProfit - cryptoProfit * cryptoTaxRate,
            taxProcetage: cryptoTaxRate * 100,
            bought: cryptoBoughtPrice,
            sold: cryptoSoldValue,
            holdtime: cryptoHoldingTimeInDays
        }];
        console.log(w);
    }
}
//convert the date to the right format


//cryptotax(profitThisYear, crypto amout, crypto price, new Date(bought year, borught mounth, bought day), crypto sold price, new Date(sold year, sold mounth, sold day))
cryptoTax(0,1, 100, new Date(2020, 1, 1), 50, new Date(2020, 12, 31));
