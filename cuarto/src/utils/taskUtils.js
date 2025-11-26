// Manejo general de las tareas

// Agrega una nueva tarea al inicio de la lista (orden cronológico inverso)
export function addTask(tasks, text) {
  // Creamos nueva tarea en formato: { id, text, completed }
  const newTask = {
    id: Date.now(),
    text: text.trim(),
    completed: false
  };
  // Insertamos la nueva tarea al principio
  return [newTask, ...tasks];
}

// Elimina una tarea según su id
export function deleteTask(tasks, id) {
  return tasks.filter(task => task.id !== id);
}

// Marca o desmarca una tarea como completada
export function toggleTask(tasks, id) {
  return tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
}

// Opcional: Para usar siempre tareas en orden cronológicamente inverso
export function sortTasksDescending(tasks) {
  return [...tasks].sort((a, b) => b.id - a.id);
}
