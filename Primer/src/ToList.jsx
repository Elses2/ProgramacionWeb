import React from "react";
import "./ToList.css";
import logo from "/favicon.png";
const ToList = () => {    {/*Funcion flechada otra forma de hacerlo :v*/}
  return (
    <>
    <div className="tolist-container">
      <img src={logo} alt="Logo" className="tolist-logo" />
      <h2 className="tolist-title">Elses ToList</h2>
      <p className="tolist-description">Organiza tus tareas diarias con facilidad:</p>
      <div className="tolist-input-row">
        <input
          type="text"
          className="tolist-input"
          placeholder="Nueva tarea..."
          disabled
        />
        <button className="tolist-add-btn" disabled>Agregar tarea</button>
      </div>
      <ul className="tolist-list">
        <li className="tolist-item">
          <label className="tolist-label">
            <input
              type="checkbox"
              className="tolist-checkbox"
              disabled
            />
            <span className="tolist-task-text">Hacer la tarea de programacion web</span>
          </label>
          <button className="tolist-delete-btn" disabled>Eliminar</button>
        </li>
      </ul>
    </div>
    </>
  );
};

export default ToList;
