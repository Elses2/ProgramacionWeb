import "../../styles/ToList.scss";
import { useState } from "react";
import { addTask, deleteTask, toggleTask } from "../../utils/taskUtils";
import { isTaskListEmpty, getEmptyTaskListMessage } from "../../utils/MessageUtils";
import Logo from "./Logo";
import Title from "./Title";
import InputRow from "./InputRow";
import TaskList from "./TaskList";

export default function ToList() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(text) {
    if (!text.trim()) return;
    setTasks(tasks => addTask(tasks, text));
  }

  function handleDeleteTask(id) {
    setTasks(tasks => deleteTask(tasks, id));
  }

  function handleToggleTask(id) {
    setTasks(tasks => toggleTask(tasks, id));
  }

  return (
    <div className="tolist-container">
      <Logo />
      <Title />
      <InputRow onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
        emptyMessage={
          isTaskListEmpty(tasks) ? getEmptyTaskListMessage() : null
        }
      />
    </div>
  );
}


