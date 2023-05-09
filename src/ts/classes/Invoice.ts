import { OutputFormatter } from "../interfaces/OutputFormatter";

export class Invoice implements OutputFormatter {
  constructor(
    private client: string,
    private details: string,
    private amount: number
  ) {}

  showOutput() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}
