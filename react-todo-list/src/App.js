import Form from './Form';
import React, {useState } from "react";
import TaskList from './TaskList';

function App() {
  const [taskList, setTaskList] = useState([]);
  
  const addNewTask = (name) => {
    setTaskList([
      ...taskList,
      {
        id: Math.random(),
        name: name
      }
    ])
  }

  const removeTask = (id) => {
    setTaskList(
      taskList.filter(task =>{
        return task.id != id
      })
    );
  }

  return (
    <>
      <Form submitHandler={addNewTask} inputPlaceholder="Task name" buttonLabel="Add" />
      <TaskList removeHandler={removeTask} listOfTasks={taskList} />
    </>
  );
}

export default App;
