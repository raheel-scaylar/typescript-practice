import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const paymentType = document.getElementById("type");
const toFrom = document.getElementById("tofrom");
const details = document.getElementById("details");
const amount = document.getElementById("amount");
const form = document.querySelector(".new-item-form");
// Template instance
const ul = document.querySelector(".item-list");
const list = new ListTemplate(ul);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let transactionValues = [
        toFrom.value,
        details.value,
        amount.valueAsNumber,
    ];
    let doc;
    if (paymentType.value === "invoice")
        doc = new Invoice(...transactionValues);
    else
        doc = new Payment(...transactionValues);
    list.render(doc, paymentType.value, "end");
});
