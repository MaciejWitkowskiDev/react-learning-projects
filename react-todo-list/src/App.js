import Form from './Form';
import React, {useState } from "react";
import TaskList from './TaskList';

function App() {
  const [taskList, setTaskList] = useState([]);
  
  const addNewTask = (e) => {
    e.preventDefault();
    console.log(e.target);
    setTaskList([
      ...taskList,
      {
        id: Math.random(),
        name: e.target.name.value
      }
    ])
  }

  return (
    <>
      <TaskList listOfTasks={taskList} />
      <Form submitHandler={addNewTask} inputPlaceholder="Task name" buttonLabel="Add new todo" />
    </>
  );
}

export default App;
