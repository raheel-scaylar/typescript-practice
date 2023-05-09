import { OutputFormatter } from "../interfaces/OutputFormatter";

export class Payment implements OutputFormatter {
  constructor(
    private recipient: string,
    private details: string,
    private amount: number,
  ) {}

  showOutput() {
    return `${this.recipient} received ${this.amount} for ${this.details}`;
  }
}
