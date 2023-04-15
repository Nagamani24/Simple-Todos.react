import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  onDelete = id => {
    const {todoList} = this.state
    const updatedTodos = todoList.filter(eachItem => eachItem.id !== id)

    this.setState({todoList: updatedTodos})
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Simple Todos</h1>
          <ul>
            {todoList.map(eachItem => (
              <TodoItem
                todoItem={eachItem}
                deleteItem={this.onDelete}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
