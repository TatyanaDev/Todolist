import { AddNewTaskDialog } from "./AddNewTaskDialog/AddNewTaskDialog.js";
import { EditTaskDialog } from "./EditTaskDialog/EditTaskDialog.js";
import { createElement } from "../../utils/createElement.js";
import { openAddNewTaskDialog } from "../data/data.js";
import { Button } from "./common/Button/Button.js";
import { Tasklist } from "./Tasklist/Tasklist.js";
import { Header } from "./Header/Header.js";

export function Todolist() {
  const container = createElement("div");

  container.append(Header(), Tasklist(), AddNewTaskDialog(), EditTaskDialog(), Button("Add +", openAddNewTaskDialog));

  return container;
}
