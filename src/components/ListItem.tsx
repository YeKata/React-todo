import { useTodoStore } from '../store/store'

const ListItem = ({ item }: any) => {
  const { todoCheck, removeTodoItem } = useTodoStore()
  const check = () => {
    todoCheck(item)
  }

  return (
    <li className="shadow">
      <div className="list_box">
        <div
          onClick={check}
          className={`hoverbtn  ${
            item.done ? 'checkBtnCompleted' : 'checkBtn'
          }`}
        />
        <div className="list_text">
          <span className={item.done ? 'textCompleted' : ''}>{item.title}</span>
        </div>
        <div
          className={'hoverbtn removeBtn'}
          onClick={() => removeTodoItem(item)}
        />
      </div>
    </li>
  )
}

export default ListItem
