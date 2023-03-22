import React, { useEffect } from "react";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: values.avatar,
    });
  }

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="add-avatar"
      btnText="Сохранить"
      container="popup__avatar-container"
      classTitle="avatar-title"
      form="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="form__label">
        <input
          type="url"
          className="form__item"
          id="avatar"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
          value={values.avatar || ""}
          onChange={handleChange}
        />
        <span
          className={`form__item-error ${
            isValid ? "" : "form__item-error_active"
          }`}
        >
          {errors.avatar}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
