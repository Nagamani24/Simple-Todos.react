// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteItem} = props

  const {title, id} = todoItem

  const deleteTodo = () => {
    deleteItem(id)
  }
  return (
    <li className="todo-container">
      <p>{title}</p>
      <button type="button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
