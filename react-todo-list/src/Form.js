function Form(props){
    return(
        <form>
            <input placeholder={props.inputPlaceholder} type="text" />
            <button type="submit">{ props.buttonLabel }</button>
        </form>
    );
}

export default Form;