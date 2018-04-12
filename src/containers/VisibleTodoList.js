import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions/index'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../reducers/index'

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: id => dispatch(toggleTodo(id)),
        removeTodo: id => dispatch(removeTodo(id))
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList