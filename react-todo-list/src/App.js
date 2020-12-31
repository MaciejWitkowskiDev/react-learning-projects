import Form from './Form';
import React, {useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  
  return (
    <>
      <Form inputPlaceholder="Task name" buttonLabel="Add new todo" />
    </>
  );
}

export default App;
