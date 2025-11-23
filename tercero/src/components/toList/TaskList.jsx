import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDeleteTask, onToggleTask, emptyMessage }) {
  if (emptyMessage) {
    return <div style={{ color: "#808080", padding: "18px" }}>{emptyMessage}</div>;
  }

  return (
    <ul className="tolist-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDeleteTask(task.id)}
          onToggle={() => onToggleTask(task.id)}
        />
      ))}
    </ul>
  );
}
