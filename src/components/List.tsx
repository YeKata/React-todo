import React from 'react'
import { useTodoStore } from '../store/store'
import ListItem from './ListItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
const List = () => {
  const { todoItems } = useTodoStore()
  const nodeRef = React.useRef(null)
  return (
    <div>
      <ul>
        <TransitionGroup className="todo-list">
          {todoItems.map((li) => (
            <CSSTransition
              key={li.id}
              nodeRef={nodeRef}
              timeout={500}
              classNames="list"
            >
              <div ref={nodeRef}>
                <ListItem item={li} key={li.id} />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  )
}

export default List
