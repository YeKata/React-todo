import React from 'react'
import { useTodoStore, Todo } from '../store/store'
import ModalPage from './ModalPage'

const TodoInput = () => {
  const {
    todoText,
    showModal,
    setTodoText,
    setModal,
    addTodoItem,
    resetTodoText,
  } = useTodoStore()

  const memoText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value)
  }

  const enterKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      todoUpload()
    }
  }

  const todoUpload = () => {
    if (todoText === '') {
      setModal()
    } else {
      const todo: Todo = {
        id: Date.now(),
        title: todoText,
        done: false,
      }
      addTodoItem(todo)
      resetTodoText()
    }
  }
  return (
    <div className="container">
      <div className="inputBox shadow input-flex">
        <input
          type="text"
          onChange={memoText}
          onKeyDown={enterKeyPress}
          value={todoText}
          className="textbox"
        />
        <div className="addContainer hoverbtn" onClick={todoUpload} />
        {showModal ? <ModalPage /> : null}
      </div>
    </div>
  )
}

export default TodoInput
