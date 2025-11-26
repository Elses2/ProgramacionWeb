// Manejo del mensaje cuando la lista está vacía

export function isTaskListEmpty(tasks) {
  return tasks.length === 0;
}

export function getEmptyTaskListMessage() {
  return "No hay tareas en la lista.";
}
