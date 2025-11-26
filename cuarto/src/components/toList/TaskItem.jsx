export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className="tolist-item">
      <label className="tolist-label">
        <input
          type="checkbox"
          className="tolist-checkbox"
          checked={task.completed}
          onChange={onToggle}
        />
        <span
          className="tolist-task-text"
          style={{ textDecoration: task.completed ? "line-through" : "none", color: task.completed ? "#aaa" : "#222" }}
        >
          {task.text}
        </span>
      </label>
      <button className="tolist-delete-btn" onClick={onDelete} title="Eliminar tarea">
        Eliminar
      </button>
    </li>
  );
}
