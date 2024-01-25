import { useTodoStore } from '../store/store'

const ModalPage = () => {
  const { setModal } = useTodoStore()
  return (
    <div className="modal-mask">
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="modal-header">경고</div>
          <div className="modal-body">내용을 입력해주세요</div>
          <div className="modal-footer">
            <button className="modal-default-button" onClick={setModal}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPage
