function Modal(props) {
  function cancelAction() {
    props.onCancel();
  }

  function confirmAction() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <botton className="btn btn--alt" onClick={cancelAction}>
        Cancel
      </botton>
      <botton className="btn" onClick={confirmAction}>
        Comfirm
      </botton>
    </div>
  );
}

export default Modal;
