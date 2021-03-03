import React from "react"
import { connect } from "react-redux"
import AddTodo from "./AddTodo"
import Modal from "./Modal"
import TodoItem from "./TodoItem"
import {setShowModal, setFind, setFindValue} from '../redux/actions';


const TodoList = (props) => {

    const handleModal = () => {
        props.setShowModal()
    }

    const onInput = e => {
        props.setFindValue(e.target.value)
        props.setFind(props.findValue)
        console.log(props.todos);
    }

    return (
        <div>
            <button onClick={() => handleModal()}>Add</button>
            <input onChange={onInput} value={props.findValue} className='form-control' type="text"/>
            <Modal />
            {props.todos.map(item => {
                return <TodoItem 
                    key={item.id} 
                    text={item.text} 
                    done={item.done}
                    id={item.id}
                    show={item.show} />
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
    findValue: state.findValue
})

export default connect(mapStateToProps, {setShowModal, setFind, setFindValue})(TodoList)