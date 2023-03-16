import Popup from "./Popup";

function ImagePopup({ card, onClose }) {
  const emptyCard = JSON.stringify(card) === "{}";
  return (
    <Popup
      isOpen={!emptyCard}
      onClose={onClose}
      name="image"
      container="popup__image-container"
    >
      <img
        className="popup__image-card"
        id="image"
        src={card.link}
        alt={card.name}
      />
      <h2 className="popup__image-title">{card.name}</h2>
    </Popup>
  );
}

export default ImagePopup;
