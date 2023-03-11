function ImagePopup({ card, onClose }) {
  const emptyCard = JSON.stringify(card) === '{}';
  return (
    <div className={`popup popup_type_image ${!emptyCard ? "popup_opened" : ""}`} onClick={onClose}>
      <div className="popup__image-container">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <img className="popup__image-card" id="image" src={card.link} alt={card.name} />
        <h2 className="popup__image-title">{card.name}</h2>
      </div>
    </div>
  )
}

export default ImagePopup;