import Form from './Form';
import React, {useState } from "react";
import TaskList from './TaskList';

function App() {
  const [taskList, setTaskList] = useState([]);
  
  const addMockTodo = () => {
    setTaskList([
      ...taskList,
      {
        id: 0,
        name: 'xD'
      }
    ]);
  }

  return (
    <>
      <TaskList listOfTasks={taskList} />
      <Form inputPlaceholder="Task name" buttonLabel="Add new todo" />
      <button onClick={addMockTodo}>addMockTodo</button>
    </>
  );
}

export default App;
