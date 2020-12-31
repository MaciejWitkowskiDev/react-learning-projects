function Form(props){
    return(
        <form onSubmit={props.submitHandler}>
            <input id="name" placeholder={props.inputPlaceholder} type="text" />
            <button type="submit">{ props.buttonLabel }</button>
        </form>
    );
}

export default Form;