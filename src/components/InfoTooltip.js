import fail from "../images/failed.svg";
import success from "../images/success.svg";

function InfoTooltip({ isOpen, onClose, isSuccessReg }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__icon-container popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="popup__icon"
          src={isSuccessReg ? success : fail}
          alt={isSuccessReg ? "success" : "fail"}
        />
        <h2 className="popup__title popup__icon-title">
          {isSuccessReg
            ? "Вы успешно зарегистрировались!"
            : `Что-то пошло не так! Попробуйте ещё раз.`}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
