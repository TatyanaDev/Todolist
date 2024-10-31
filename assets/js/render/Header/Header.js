import { createElement } from "../../../utils/createElement.js";
import { data } from "../../data/data.js";

export function Header() {
  const container = createElement("h1", { innerText: data.todolist.title });

  return container;
}
