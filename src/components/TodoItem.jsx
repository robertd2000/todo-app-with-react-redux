import React from "react"
import { connect } from "react-redux"
import { setDoneTodo } from "../redux/actions"

const TodoItem = (props) => {

    const doneHandle = id => {
        console.log(setDoneTodo(id));
        props.setDoneTodo(id)
    }

    return (
        <div className={props.show ? 'item__inner' : 'hide'}>
            <div className={props.done ? 'done' : ''} onClick={() => doneHandle(props.id)}>
                {props.text}
            </div>
        </div>
    )
}

export default connect(
    null,
    {setDoneTodo}
)(TodoItem)
