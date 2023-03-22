import { useEffect } from "react";
import { useFormAndValidation } from "../hooks/useFormAndValidation";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: values.imagename,
      link: values.imageurl,
    });
  }

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="add-image"
      btnText="Создать"
      form="card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="form__label">
        <input
          type="text"
          className="form__item"
          id="imagename"
          name="imagename"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
          value={values.imagename || ""}
          onChange={handleChange}
        />
        <span
          className={`form__item-error ${
            isValid ? "" : "form__item-error_active"
          }`}
        >
          {errors.imagename}
        </span>
      </label>
      <label className="form__label">
        <input
          type="url"
          className="form__item"
          id="imageurl"
          name="imageurl"
          placeholder="Ссылка на картинку"
          required
          value={values.imageurl || ""}
          onChange={handleChange}
        />
        <span
          className={`form__item-error ${
            isValid ? "" : "form__item-error_active"
          }`}
        >
          {errors.imageurl}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
