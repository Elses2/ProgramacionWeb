import { useState } from "react";

export default function InputRow({ onAddTask }) {
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleAdd() {
    if (input.trim()) {
      onAddTask(input);
      setInput(""); // limpia input después de añadir
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleAdd();
  }

  return (
    <div className="tolist-input-row">
      <input
        type="text"
        className="tolist-input"
        placeholder="Nueva tarea..."
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="tolist-add-btn"
        onClick={handleAdd}
        disabled={!input.trim()}
      >
        Agregar tarea
      </button>
    </div>
  );
}
