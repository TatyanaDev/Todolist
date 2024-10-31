import { addTask, closeAddNewTaskDialog, data } from "../../data/data.js";
import { Button } from "../common/Button/Button.js";

export function AddNewTaskDialog() {
  const container = document.createElement("dialog");
  const titleElement = document.createElement("h3");

  titleElement.innerText = "Add new task title";
  container.open = data.addNewTaskDialog.isOpen;

  const inputElement = document.createElement("input");

  container.append(
    titleElement,
    inputElement,
    Button("save", () => addTask(inputElement.value)),
    Button("cancel", () => closeAddNewTaskDialog())
  );

  return container;
}
