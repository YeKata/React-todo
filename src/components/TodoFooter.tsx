import { useTodoStore } from '../store/store'

const TodoFooter = () => {
  const { clearTodo } = useTodoStore()

  return (
    <div className="clearAllContainer">
      <span className="clearAllBtn hoverbtn" onClick={() => clearTodo()}>
        Clear All
      </span>
    </div>
  )
}

export default TodoFooter
