import Popup from "./Popup";

function PopupWithForm({ isOpen, name, container, onClose, ...props }) {
  return (
    <Popup isOpen={isOpen} name={name} container={container} onClose={onClose}>
      <h2 className={`popup__title popup__${props.classTitle}`}>
        {props.title}
      </h2>
      <form
        className={`form form_${props.form}`}
        name={name}
        onSubmit={props.onSubmit} /*noValidate*/
      >
        {props.children}
        <button type="submit" className="form__button">
          {props.btnText}
        </button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
