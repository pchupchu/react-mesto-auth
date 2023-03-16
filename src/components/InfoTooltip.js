import fail from "../images/failed.svg";
import success from "../images/success.svg";
import Popup from "./Popup";

function InfoTooltip({ isOpen, onClose, isSuccessReg }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose} container="popup__icon-container">
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
    </Popup>
  );
}

export default InfoTooltip;
