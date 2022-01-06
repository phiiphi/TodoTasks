import { useState } from "react";

const EditTask = ({ addTask, task, singleTask }) => {
  const [text, setText] = useState();
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please add task");
      return;
    }
    //passing the arguement of what task need to be displayed
    addTask({ text, day, reminder });

    //emptying the feilds after submitting
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            value={text}
            placeholder="Add Task"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="task">Day & Time</label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={day}
            onChange={(e) => {
              setDay(e.target.value);
            }}
          />
        </div>
        <div className="form-control form-control-check">
          <label htmlFor="task">Set Reminder</label>
          <input
            type="checkbox"
            value={reminder}
            checked={reminder}
            onChange={(e) => {
              setReminder(e.currentTarget.checked);
            }}
          />
        </div>
        <input className="btn btn-block" type="submit" value="Save" />
      </form>
    </div>
  );
};

export default EditTask;
