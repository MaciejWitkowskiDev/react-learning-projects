import {useState} from 'react'

function Form(props){
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.length == 0) return;
        props.submitHandler(value);
        e.target.name.value = '';
        setValue('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input id="name" onChange={handleChange} placeholder={props.inputPlaceholder} type="text" />
            <button type="submit">{ props.buttonLabel }</button>
        </form>
    );
}

export default Form;