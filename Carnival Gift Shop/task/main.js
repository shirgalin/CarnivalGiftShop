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
    console.log("What do you want to do?");
    console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
    let command = input();
    while (Number(command) !== 5) {
        if (Number(command) === 1 || command.includes("buy") || command.includes("gift")) {
            buyGift();
            commands();
        }
        if (Number(command) === 2) {
            addTickets();
            getBalance();
            commands();
        }
        if (Number(command) === 3 || command.includes("check") || command.includes("ticket")) {
            getBalance();
            commands();
        }
        if (Number(command) === 4 || command.includes("show")) {
            listGifts();
            commands();
        }
        if (Number(command) < 1 || Number(command) > 5) {
            while (Number(command) < 0 || Number(command) > 5) {
                console.log("Please enter a valid number!");
                console.log("What do you want to do?");
                console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
                command = input();
            }
        }
        command = input();
    }

    function listGifts() {
        console.log("Here's the list of gifts:\n");
        for (let key in gifts_dictionary) {
            console.log(key + "-" + " " + gifts_dictionary[key][0] + ", Cost: " + gifts_dictionary[key][1] + " tickets");
        }
    }

    function addTickets() {
        let amountTick = +input("Enter the ticket amount: ");
        while (amountTick > 1000 || amountTick < 0 || isNaN(amountTick)) {
            console.log("Please enter a valid number between 0 and 1000.");
            let amountTick = +input("Enter the ticket amount: ");
        }
        balance = balance + amountTick;
    }

    function getBalance() {
        console.log("Total tickets: " + balance + "\n");
    }

    function buyGift() {
        let gift = input("Enter the number of the gift you want to get: ");
        if (isNaN(Number(gift)) || Number(gift) > 10 || Number(gift) < 1) {
            console.log("Please enter a valid number! \n");
            commands();
        }
        else if (balance - Number(gifts_dictionary[gift][1]) < 0) {
            console.log("You don't have enough tickets to buy this gift. \n")
            getBalance();
            commands();
        }
        else if (gift) {
            console.log("Here you go, one " + gifts_dictionary[gift][0] + "!");
            balance = balance - Number(gifts_dictionary[gift][1]);
            getBalance();
            delete gifts_dictionary[gift];
            commands();
        }
    }
    if (Number(command) === 5 || command.includes("exit")) {
        exit();
    }
}

function exit() {
    console.log("Have a nice day!");
    return 0;
}