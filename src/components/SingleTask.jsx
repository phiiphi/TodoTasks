import { FaTimes } from "react-icons/fa";
import TrackerButton from "./TrackerButton";
const SingleTask = ({
  task,
  deleteTask,
  toggleReminder,
}) => {
  return (
    <>
      <div
        className={`card task ${task.reminder ? "reminder" : ""}`}
        onDoubleClick={toggleReminder}>
        <h3>
          {task.text}{" "}
          <TrackerButton  color="red" text="edit" />
          <FaTimes style={{ color: "green" }} onClick={deleteTask} />
        </h3>
        <h3>
          {/* <FaTimes
            style={{ color: "green", float: "left" }}
            onClick={changeEditTaskStatus}
          /> */}
        </h3>

        <h3>{task.day}</h3>
      </div>
    </>
  );
};

export default SingleTask;
