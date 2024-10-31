import { data } from "../../data/data.js";

export function Header() {
  const container = document.createElement("h1");

  container.innerText = data.todolist.title;

  return container;
}
