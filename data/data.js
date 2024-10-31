export const data = {
  todolist: {
    id: crypto.randomUUID(),
    title: "Todolist",
    tasks: [
      {
        id: crypto.randomUUID(),
        title: "Learn HTML",
      },
      {
        id: crypto.randomUUID(),
        title: "Learn CSS",
      },
      {
        id: crypto.randomUUID(),
        title: "Learn JS",
      },
      {
        id: crypto.randomUUID(),
        title: "Learn React",
      },
    ],
  },
  addNewTaskDialog: {
    isOpen: false,
  },
  editTaskDialog: {
    isOpen: false,
    taskId: undefined,
    taskTitle: "",
  },
};

let changeDataCallback = () => {};

export function subscribe(subscriber) {
  changeDataCallback = subscriber;
}

export function deleteTask(taskId) {
  data.todolist.tasks = data.todolist.tasks.filter((task) => task.id !== taskId);

  changeDataCallback();
}

export function addTask(title) {
  const newTask = {
    id: crypto.randomUUID(),
    title,
  };

  data.todolist.tasks.push(newTask);

  changeDataCallback();
}

export function editTask(newTitle) {
  const taskId = data.editTaskDialog.taskId;

  const task = data.todolist.tasks.find((task) => task.id === taskId);

  task.title = newTitle;

  changeDataCallback();
}

export function openAddNewTaskDialog() {
  data.addNewTaskDialog.isOpen = true;

  changeDataCallback();
}

export function closeAddNewTaskDialog() {
  data.addNewTaskDialog.isOpen = false;

  changeDataCallback();
}

export function openEditTaskDialog(taskId, title) {
  data.editTaskDialog.isOpen = true;
  data.editTaskDialog.taskId = taskId;
  data.editTaskDialog.taskTitle = title;

  changeDataCallback();
}

export function closeEditTaskDialog() {
  data.editTaskDialog.isOpen = false;

  changeDataCallback();
}
