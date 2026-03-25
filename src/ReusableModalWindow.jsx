function ReusableModalWindow({ title, children, onClick }) {
  return (
    <div className="modal-overlay">
      <div className="modal-overlay__content">
      <button className="close-button" onClick={onClick}>закрыть</button>
        {title && <h2 className="modal-overlay__title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
export default ReusableModalWindow;
