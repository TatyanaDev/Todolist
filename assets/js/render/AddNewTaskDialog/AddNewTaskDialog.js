import { addTask, closeAddNewTaskDialog, data } from "../../data/data.js";
import { createElement } from "../../../utils/createElement.js";
import { Button } from "../common/Button/Button.js";

export function AddNewTaskDialog() {
  const container = createElement("dialog", { class: "dialog", open: data.addNewTaskDialog.isOpen });

  const titleElement = createElement("h3", { innerText: "Add new task title" });

  const inputElement = createElement("input");

  container.append(
    titleElement,
    inputElement,
    Button("Save", () => addTask(inputElement.value)),
    Button("Cancel", closeAddNewTaskDialog)
  );

  return container;
}
