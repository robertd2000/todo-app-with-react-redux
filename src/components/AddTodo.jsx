import { connect } from "react-redux"
import {setInputValue, addTodo} from '../redux/actions';

const AddTodo = (props) => {

    const onAddTodo = () => {
        props.addTodo(props.inputValue)
    }
    const onInput = e => {
        props.setInputValue(e.target.value)
    }


    return (
        <div>
            <input className='form-control' onChange={onInput} value={props.inputValue} type="text"/>
            <input className='btn btn-primary' onClick={onAddTodo} type="button" value="Send"/>
        </div>
    )
}

const mapStateToProps = state => {
    return {inputValue: state.inputValue}
};

export default connect(
    mapStateToProps,
    {setInputValue, addTodo}
)(AddTodo)