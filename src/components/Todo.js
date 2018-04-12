import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({toggleTodo, removeTodo, completed, text, id}) => {
    return <div>
        <li
            style={ {
                textDecoration: completed ? 'line-through' : 'none'
            } }
        >
            {text}
        </li>
        <div>
            <button onClick={() => toggleTodo(id)}>Mark as done</button>
            &nbsp;
            <button onClick={() => removeTodo(id)}>Delete</button>
        </div>
    </div>
}

Todo.propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default  Todo