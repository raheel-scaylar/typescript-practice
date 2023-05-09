export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    showOutput() {
        return `${this.recipient} received ${this.amount} for ${this.details}`;
    }
}
