function InfoTooltip({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__icon-container popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <div className="popup__icon"></div>
        <h2 className="popup__title popup__icon-title">
          Вы успешно зарегистрировались!
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
