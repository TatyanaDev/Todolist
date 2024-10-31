import { AddNewTaskDialog } from "./AddNewTaskDialod/AddNewTaskDialod.js";
import { openAddNewTaskDialog } from "../data/data.js";
import { Button } from "./common/Button/Button.js";
import { Tasklist } from "./Tasklist/Tasklist.js";
import { Header } from "./Header/Header.js";
import { EditTaskDialog } from "./EditTaskDialog/EditTaskDialog.js";

export function Todolist() {
  const container = document.createElement("div");

  container.append(
    Header(),
    Tasklist(),
    AddNewTaskDialog(),
    EditTaskDialog(),
    Button("+ add", () => openAddNewTaskDialog())
  );

  return container;
}
