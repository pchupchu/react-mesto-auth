function PopupWithForm({
  title,
  name,
  btnText,
  container,
  classTitle,
  form,
  isOpen,
  onClose,
  onSubmit,
  children,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className={`popup__container ${container}`}>
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className={`popup__title popup__${classTitle}`}>{title}</h2>
        <form
          className={`form form_${form}`}
          name={name}
          onSubmit={onSubmit} /*noValidate*/
        >
          {children}
          <button type="submit" className="form__button">
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
