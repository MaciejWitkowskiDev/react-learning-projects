import Task from './Task'

function TaskList(props){
    const tasks = props.listOfTasks.map(task => {
        return(
            <Task clickHandler={() => props.removeHandler(task.id)} key={task.id} name = {task.name} /> 
        );
    });
    return(
       <div id="taskList">
            <ul>
                {tasks}
            </ul>
       </div>
    );
}

export default TaskList;