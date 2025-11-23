import "../../styles/ToList.css";
import Logo from "./Logo";
import Title from "./Title";
import InputRow from "./InputRow";
import TaskList from "./TaskList";

export default function ToList() {
  return (
    <>
      <div className="tolist-container">
        <Logo />
        <Title />
        <InputRow />
        <TaskList />
      </div>
    </>
  );
}

