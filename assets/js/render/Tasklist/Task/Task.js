import { deleteTask, openEditTaskDialog } from "../../../data/data.js";
import { createElement } from "../../../../utils/createElement.js";
import { Button } from "../../common/Button/Button.js";

export function Task(task) {
  const container = createElement("li");

  container.append(
    task.title,
    Button("Delete", () => deleteTask(task.id)),
    Button("Edit", () => openEditTaskDialog(task.id, task.title))
  );

  return container;
}
