class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        this._interest = interest;
    }

    addInterest() {
        if (this._balance > 0) {
            let amount = this._balance * this._interest / 100;
            this._balance += amount;
        }
    }
    toString() {
        return "Account " + this._number + ": balance " + this._balance + " , interest: " + this._interest;
    }
}

// var savingAcc = new SavingsAccount(1, 0.1);
// savingAcc.deposit(1000);
//             savingAcc.addInterest();