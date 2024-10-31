import { deleteTask, openEditTaskDialog } from "../../../data/data.js";
import { Button } from "../../common/Button/Button.js";

export function Task(task) {
  const container = document.createElement("li");

  container.append(
    task.title,
    Button("del", () => deleteTask(task.id)),
    Button("edit", () => openEditTaskDialog(task.id, task.title))
  );

  return container;
}
