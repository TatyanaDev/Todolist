import { Todolist } from "./render/Todolist.js";
import { subscribe } from "./data/data.js";

const root = document.getElementById("root");

function render() {
  root.innerHTML = "";

  root.append(Todolist());
}

render();
subscribe(render);
