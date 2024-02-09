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
        console.log("You have a loss, you can use this to reduce your tax in the future");
        console.log("crypto sold", cryptoAmount);
        console.log("Loss: ", cryptoProfit, "kr");
        console.log("Tax reduction: ", cryptoProfit * cryptoTaxRate, "kr");
        console.log("loss after deduction: ", cryptoProfit - cryptoProfit * cryptoTaxRate, "kr");
        console.log("Tax rate deduction: ", cryptoTaxRate * 100, "%");   
    }else if (type==2) {
        console.log("You have a profit, you have to pay tax :C");
        console.log("crypto sold", cryptoAmount);
        console.log("Profit: ", cryptoProfit, "kr");
        console.log("Tax: ", cryptoProfit * cryptoTaxRate, "kr");
        console.log("Profit after tax: ", cryptoProfit - cryptoProfit * cryptoTaxRate, "kr");
        console.log("Tax rate: ", cryptoTaxRate * 100, "%");
    }
    console.log("Crypto bought for: ", cryptoBoughtPrice, "kr");
    console.log("Crypto sold for: ", cryptoSoldValue, "kr");
    console.log("the crypto was held for: ", cryptoHoldingTimeInDays, "days");
}
//convert the date to the right format


//cryptotax(profitThisYear, crypto amout, crypto price, new Date(bought year, borught mounth, bought day), crypto sold price, new Date(sold year, sold mounth, sold day))
cryptoTax(0,1, 100, new Date(2020, 1, 1), 50, new Date(2020, 12, 31));
