import SingleTask from "./SingleTask";
const Tasks = ({ tasks, deleteTask, toggleReminder, changeEditTaskStatus }) => {
  return (
    <>
      {tasks.map((task) => (
        <SingleTask
          key={task.id}
          task={task}
          deleteTask={() => deleteTask(task.id)}
          toggleReminder={() => toggleReminder(task.id)}
          changeEditTaskStatus={() => changeEditTaskStatus(task.id)}
        />
      ))}
    </>
  );
};

export default Tasks;
