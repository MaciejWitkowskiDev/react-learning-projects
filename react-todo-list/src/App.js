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

  return (
    <>
      <TaskList listOfTasks={taskList} />
      <Form submitHandler={addNewTask} inputPlaceholder="Task name" buttonLabel="Add new todo" />
    </>
  );
}

export default App;
