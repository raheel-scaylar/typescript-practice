import { OutputFormatter } from "../interfaces/OutputFormatter";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}
  render(item: OutputFormatter, heading: string, position: "start" | "end") {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.showOutput();

    li.append(p);

    if (position === "start") this.container.prepend(li);
    else this.container.append(li);
  }
}
