//this is to calculate the Danish CryptoTax
// This is a simple script to calculate the Danish CryptoTax
// The script is based on the Danish Tax Authorities guidelines
// The script is not guaranteed to be correct
// The script is not guaranteed to be up to date

//danish crypto tax runs on the FIFO principle


const cryptoTax = (cryptoAmount, cryptoenterPrice, cryptoDate, cryptoSoldPrice, cryptoSoldDate) => {
   const cryptoTaxRate = 0;
    const startingTaxRate = 0.27;
    const maximumTaxRate = 0.53;
    const lossReduction = 0.27;
    const maxMoneyBeforeTax = 51000;
    const maxMoneyBeforeTopTax = 510000;
    const startingProfitThisYear = 0;
    // The script starts here
    const cryptoBoughtPrice = cryptoAmount * cryptoenterPrice;

    const cryptoSoldValue = cryptoAmount * cryptoSoldPrice;

    const cryptoProfit = cryptoSoldValue - cryptoBoughtPrice;

    const cryptoHoldingTimeInDays = cryptoSoldDate - cryptoDate / (1000 * 60 * 60 * 24);
    
    if (cryptoProfit < 0) {
        cryptoTaxRate = lossReduction;
        
    }
    else if (startingProfitThisYear + cryptoProfit <= maxMoneyBeforeTax) {
        cryptoTaxRate = 0;
    }else if (startingProfitThisYear + cryptoProfit <= maxMoneyBeforeTopTax) {
        cryptoTaxRate = startingTaxRate;
    } else {
        cryptoTaxRate = maximumTaxRate;
    }
    const cryptoTax = cryptoProfit * cryptoTaxRate;
    const cryptoProfitAfterTax = cryptoProfit - cryptoTax;
    console.log("Crypto bought for: ", cryptoBoughtPrice, "kr");
    console.log("Crypto sold for: ", cryptoSoldValue, "kr");
    console.log("Profit: ", cryptoProfit, "kr");
    console.log("Holding time: ", cryptoHoldingTimeInDays, "days");
    console.log("Tax rate: ", cryptoTaxRate * 100, "%");
    console.log("Tax: ", cryptoTax, "kr");
    console.log("Profit after tax: ", cryptoProfitAfterTax, "kr");
}

//cryptotax(crypto amout, crypto price, new Date(bought year, borught mounth, bought day), crypto sold price, new Date(sold year, sold mounth, sold day))
cryptoTax(1, 100, new Date(2020, 1, 1), 50, new Date(2020, 12, 31));
