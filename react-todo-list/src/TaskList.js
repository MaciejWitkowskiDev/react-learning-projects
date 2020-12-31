import Task from './Task'

function TaskList(props){
    const tasks = props.listOfTasks.map(task => {
        return(
            <Task key={task.id} name = {task.name} /> 
        );
    });
    return(
       <ul>
        {tasks}
       </ul>
    );
}

export default TaskList;