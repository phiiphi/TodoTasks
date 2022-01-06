import "./App.css";
// import Header from "./components/Header";
import TrackerHeader from "./components/TrackerHeader";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";

// import Odin from "./components/Odin";
// import { uniqid } from "uniqid";

import { useState, useEffect } from "react";

function App() {
  const [showTask, setshowTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskEdit, setTaskEdit] = useState(false);

  const editTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  };
  const changeShowTaskState = () => {
    setshowTask(!showTask);
  };
  const changeEditTaskStatus = (id) => {
    setTaskEdit(!taskEdit);
  };

  useEffect(() => {
    const getTaskFromServer = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTaskFromServer();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  };

  const fetchSingleTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  };

  const singleTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();
    setTaskEdit(data);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const addTask = async (task) => {
    // const id = uniqid();
    // const newTask = { ...task, id };
    // setTasks([...tasks, newTask]);

    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //convert the values of input feilds into json strings
      body: JSON.stringify(task),
    });
    const data = await res.json();

    //always remember the data is posted as an array
    setTasks([...tasks, data]);
  };

  const toggleReminder = async (id) => {
    //fetch single task based on the id
    const taskToToggle = await fetchSingleTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await response.json();
    //console.log(data.reminder);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      {/* <Greet /> */}
      {/* <Header Count={Count} handleIncreament={handleIncreament} /> */}
      {/* <Odin /> */}

      <TrackerHeader
        changeButtonStyle={showTask}
        changeShowTaskState={changeShowTaskState}
      />
      {showTask && <AddTask addTask={addTask} tasks={tasks} />}

      {taskEdit &&
        tasks.map((task) => (
          <EditTask
            key={task.id}
            singleTask={singleTask}
            task={task}
            addTask={addTask}
          />
        ))}

      {/* {taskEdit && (
        <EditTask tasks={tasks} singleTask={singleTask} addTask={addTask} />
      )} */}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
          editTask={editTask}
          changeEditTaskStatus={changeEditTaskStatus}
        />
      ) : (
        "No Task Available"
      )}
    </div>
  );
}

export default App;
