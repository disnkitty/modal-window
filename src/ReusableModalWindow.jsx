function ReusableModalWindow({ title, children, onClick, isOpenModal }) {
  return (
    <div
      className={`modal-overlay ${isOpenModal ? 'modal-overlay--open' : ''}`}
    >
      <div className="modal-overlay__content">
        <button className="close-button" onClick={onClick}>
          &times;
        </button>
        {title && <h2 className="modal-overlay__title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
export default ReusableModalWindow;
