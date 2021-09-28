// Flipkart Coins 
// You get 4 coins for every Rs.100 spent with 
// maximum coins of 100 for an order

const billAmount = 3300;

const coins = Math.floor(billAmount/100)*4;

if (amount >= 2500) {
    console.log("Coins are 100")
} else {
    console.log(`Coins are ${coins}`)
}

// console.log(`Coins are ${Math.min(100,coins)}`); 

