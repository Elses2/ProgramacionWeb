export default function TaskItem() {
  return (
    <li className="tolist-item">
      <label className="tolist-label">
        <input type="checkbox" className="tolist-checkbox" disabled />
        <span className="tolist-task-text">
          Hacer la tarea de programación web
        </span>
      </label>
      <button className="tolist-delete-btn" disabled>
        Eliminar
      </button>
    </li>
  );
}

