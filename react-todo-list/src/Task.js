function Task(props){
    return(
        <li onClick={props.clickHandler}>{props.name}</li>
    );
}

export default Task;