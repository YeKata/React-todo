import { create } from 'zustand'

export interface Todo {
  id: number
  title: string
  done: boolean
}

interface todoState {
  todoText: string
  todoItems: Todo[]
  showModal: boolean
  setModal(): void
  addTodoItem(item: Todo): void
  setTodoText(text: string): void
  resetTodoText(): void
  todoCheck(item: Todo): void
  removeTodoItem(item: Todo): void
  clearTodo(): void
}

export const useTodoStore = create<todoState>((set) => ({
  todoText: '',
  todoItems: [],
  showModal: false,

  setModal: () =>
    set((state) => ({
      showModal: !state.showModal,
    })),

  addTodoItem: (item) =>
    set((state) => ({
      todoItems: [...state.todoItems, item],
    })),

  setTodoText: (text) =>
    set((state) => ({
      todoText: (state.todoText = text),
    })),

  resetTodoText: () =>
    set((state) => ({
      todoText: (state.todoText = ''),
    })),

  todoCheck: (item) =>
    set((state) => ({
      todoItems: state.todoItems.map((todo) => ({
        ...todo,
        done: todo.id === item.id ? !item.done : todo.done,
      })),
    })),

  removeTodoItem: (item: Todo) =>
    set((state) => ({
      todoItems: state.todoItems.filter((todo) => todo.id !== item.id),
    })),

  clearTodo: () =>
    set(() => ({
      todoItems: [],
    })),
}))
