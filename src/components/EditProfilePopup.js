import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const user = useContext(CurrentUserContext);

  const {
    values,
    setValues,
    handleChange,
    errors,
    resetForm,
    isValid,
    setIsValid,
  } = useFormAndValidation();

  useEffect(() => {
    if (user.name) {
      setValues(user);
    }
    if (!isOpen) {
      resetForm();
      setIsValid(true);
    }
  }, [user, setValues, isOpen, resetForm, setIsValid]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: values.name,
      about: values.about,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      btnText="Сохранить"
      loaderText="Сохранение..."
      form="profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
      isLoading={isLoading}
    >
      <label className="form__label">
        <input
          type="text"
          className="form__item"
          id="name"
          name="name"
          placeholder="Ваше имя"
          minLength="2"
          maxLength="40"
          required
          value={values.name || ""}
          onChange={handleChange}
        />
        <span
          className={`form__item-error ${
            isValid ? "" : "form__item-error_active"
          }`}
        >
          {errors.name}
        </span>
      </label>
      <label className="form__label">
        <input
          type="text"
          className="form__item"
          id="about"
          name="about"
          placeholder="Ваша профессия"
          minLength="2"
          maxLength="200"
          required
          value={values.about || ""}
          onChange={handleChange}
        />
        <span
          className={`form__item-error ${
            isValid ? "" : "form__item-error_active"
          }`}
        >
          {errors.about}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
