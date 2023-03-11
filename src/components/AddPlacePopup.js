import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [placeName, setPlaceName] = useState("");
  const [placeUrl, setPlaceUrl] = useState("");

  function handleChangePlaceName(evt) {
    setPlaceName(evt.target.value);
  }

  function handleChangePlaceUrl(evt) {
    setPlaceUrl(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: placeName,
      link: placeUrl,
    });
  }

  useEffect(() => {
    if (isOpen) {
      setPlaceName("");
      setPlaceUrl("");
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
          value={placeName}
          onChange={handleChangePlaceName}
        />
        <span className="form__item-error imagename-error"></span>
      </label>
      <label className="form__label">
        <input
          type="url"
          className="form__item"
          id="imageurl"
          name="imageurl"
          placeholder="Ссылка на картинку"
          required
          value={placeUrl}
          onChange={handleChangePlaceUrl}
        />
        <span className="form__item-error imageurl-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
