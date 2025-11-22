export default function InputRow() {
  return (
    <div className="tolist-input-row">
      <input
        type="text"
        className="tolist-input"
        placeholder="Nueva tarea..."
        disabled
      />
      <button className="tolist-add-btn" disabled>
        Agregar tarea
      </button>
    </div>
  );
}

