import { createElement } from "../../../utils/createElement.js";
import { data } from "../../data/data.js";
import { Task } from "./Task/Task.js";

export function Tasklist() {
  const container = createElement("ol");

  const tasks = data.todolist.tasks;

  for (let i = 0; i < tasks.length; i++) {
    container.append(Task(tasks[i]));
  }

  return container;
}
