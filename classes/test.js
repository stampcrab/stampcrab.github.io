window.onload = tester;

var acc = new Account(1);
var savingAcc = new SavingsAccount(1, 0.1);
var checkingAcc = new Checkingaccount(1, 40);

let account1 = new Account(37729);
let account2 = new Account(393829);
account1.deposit(50);
account2.deposit(50);
account2.withdraw(10);

let savingsAccount1 = new SavingsAccount(614243, 10);
savingsAccount1.deposit(100);
let savingsAccount2 = new SavingsAccount(838330, 15);
savingsAccount2.deposit(500);
savingsAccount2.addInterest(20);



let accounts = [
    savingsAccount1,
    savingsAccount2
];


function tester() {
    console.log("start testing...");

    describe("deposit and get balance", function () {
        it("deposit first, and returns balance == 1000", function () {
            acc.deposit(1000);
            assert.equal(acc.getBalance(), 1000);
        });
    });

    describe("withdraw", function () {
        it("deposit first, returns balance == 500", function () {
            acc.withdraw(500);
            assert.equal(acc.getBalance(), 500);
        });
    });

    describe("toString", function () {
        it("returns string == Account 1: balance 500", function () {
            assert.equal(acc.toString(), "Account 1: balance 500");
        });
    });

    describe("addInterest in Savingsaccount", function () {
        it("returns balance == 1001", function () {
            savingAcc.deposit(1000);
            savingAcc.addInterest();
            assert.equal(savingAcc.getBalance(), 1001);
        });
    });





    mocha.run();
}