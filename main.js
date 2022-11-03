const input = require('sync-input');

console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");
console.log("Here's the list of gifts:\n")
let gifts_dictionary = {
    1: ["Teddy Bear", 10, 1],
    2: ["Big Red Ball", 5, 2],
    3: ["Huge Bear", 50, 3],
    4: ["Candy", 8, 4],
    5: ["Stuffed Tiger", 15, 5],
    6: ["Stuffed Dragon", 30, 6],
    7: ["Skateboard", 100, 7],
    8: ["Toy Car", 25, 8],
    9: ["Basketball", 20, 9],
    10: ["Scary Mask", 75, 10],
};

let balance = 0;

for (let key in gifts_dictionary) {
    console.log(key + "-" + " " + gifts_dictionary[key][0] + ", Cost: " + gifts_dictionary[key][1] + " tickets");
}

commands();
function commands() {
    console.log("\nWhat do you want to do?");
    console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
    let command = +input();
    if (command !== 5) {
        if (command === 1) {
            buyGift();
            commands();
        }
        if (command === 2) {
            addTickets();
            getBalance();
            commands();
        }
        if (command === 3) {
            getBalance();
            commands();
        }
        if (command === 4) {
            listGifts();
            commands();
        }
    else if (command < 1 || command > 5 || isNaN(command)) {
        if (command <= 0 || command > 5 || isNaN(command)) {
            console.log("Please enter a valid number!");
            commands();
        }
        }
    }

    function listGifts() {
        console.log("Here's the list of gifts:\n");
        for (let key in gifts_dictionary) {
            console.log(key + "-" + " " + gifts_dictionary[key][0] + ", Cost: " + gifts_dictionary[key][1] + " tickets");
        }
    }

    function addTickets() {
        let amountTick = +input("Enter the ticket amount: ");
        if (amountTick > 1000 || amountTick < 0 || isNaN(amountTick)) {
            console.log("Please enter a valid number between 0 and 1000.");
            commands();
        }
        balance = balance + amountTick;
    }

    function getBalance() {
        console.log("Total tickets: " + balance + "\n");
    }

    function buyGift() {
        let gift = +input("Enter the number of the gift you want to get: ");
        if (Number(gift) > 10 || Number(gift) < 1) {
            console.log("There is no gift with that number! \n");
        }
        else if (isNaN(Number(gift))) {
            console.log("Please enter a valid number! \n");
        }
        else if (isNaN(Number(gifts_dictionary[gift][2]))) {
            console.log("Wow! There are no gifts to buy.");
        }
        else if (balance - Number(gifts_dictionary[gift][1]) < 0) {
            console.log("You don't have enough tickets to buy this gift. \n")
            getBalance();
        }
        else if (gift) {
            console.log("Here you go, one " + gifts_dictionary[gift][0] + "!");
            balance = balance - Number(gifts_dictionary[gift][1]);
            getBalance();
            delete gifts_dictionary[gift][2];
        }
    }

    if (Number(command) === 5) {
        exit();
    }
}

function exit() {
    console.log("Have a nice day!");
    return 0;
}