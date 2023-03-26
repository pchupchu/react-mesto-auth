import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup({
  isOpen,
  onClose,
  onCardDelete,
  removedCard,
  isLoading,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(removedCard);
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="delete-card"
      btnText="Да"
      loaderText="Удаление..."
      container="popup__delete-container"
      classTitle="title-to-delete"
      form="deleting"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={true}
      isLoading={isLoading}
    />
  );
}

export default ConfirmationPopup;
