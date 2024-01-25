import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import List from './List'
import TodoFooter from './TodoFooter'

const TodoList = () => {
  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <List />
      <TodoFooter />
    </div>
  )
}

export default TodoList
