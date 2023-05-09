import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { OutputFormatter } from "./interfaces/OutputFormatter.js";

const paymentType = document.getElementById("type") as HTMLSelectElement;
const toFrom = document.getElementById("tofrom") as HTMLInputElement;
const details = document.getElementById("details") as HTMLInputElement;
const amount = document.getElementById("amount") as HTMLInputElement;
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Template instance
const ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  let transactionValues: [string, string, number] = [
    toFrom.value,
    details.value,
    amount.valueAsNumber,
  ];

  let doc: OutputFormatter;

  if (paymentType.value === "invoice") doc = new Invoice(...transactionValues);
  else doc = new Payment(...transactionValues);

  list.render(doc, paymentType.value, "end");
});


