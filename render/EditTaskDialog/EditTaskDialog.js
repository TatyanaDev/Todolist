import { closeEditTaskDialog, data, editTask } from "../../data/data.js";
import { Button } from "../common/Button/Button.js";

export function EditTaskDialog() {
  const container = document.createElement("dialog");
  const titleElement = document.createElement("h3");

  titleElement.innerText = "Edit task title";
  container.open = data.editTaskDialog.isOpen;

  const inputElement = document.createElement("input");
  inputElement.value = data.editTaskDialog.taskTitle;

  container.append(
    titleElement,
    inputElement,
    Button("save", () => {
      editTask(inputElement.value);

      closeEditTaskDialog();
    }),
    Button("cancel", () => closeEditTaskDialog())
  );

  return container;
}
