import { closeEditTaskDialog, data, editTask } from "../../data/data.js";
import { createElement } from "../../../utils/createElement.js";
import { Button } from "../common/Button/Button.js";

export function EditTaskDialog() {
  const container = createElement("dialog", { class: "dialog", open: data.editTaskDialog.isOpen });

  const titleElement = createElement("h3", { innerText: "Edit task title" });

  const inputElement = createElement("input", { value: data.editTaskDialog.taskTitle });

  container.append(
    titleElement,
    inputElement,
    Button("Save", () => {
      editTask(inputElement.value);
      closeEditTaskDialog();
    }),
    Button("Cancel", closeEditTaskDialog)
  );

  return container;
}
