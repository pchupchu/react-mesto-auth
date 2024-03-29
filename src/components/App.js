import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import * as auth from "../utils/auth.js";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmationPopup from "./ConfirmationPopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import InfoTooltip from "./InfoTooltip";
import Login from "./Login";
import Main from "./Main";
import Navbar from "./Navbar";
import ProtectedRouteElement from "./ProtectedRoute";
import Register from "./Register";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [removedCard, setRemovedCard] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isEmail, setIsEmail] = useState("");
  const [isSuccessReg, setIsSuccessReg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  useEffect(() => {
    api
      .getProfileInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  function handleUpdateUser(user) {
    setIsLoading(true);
    api
      .setProfileInfo(user)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  function handleUpdateAvatar(obj) {
    setIsLoading(true);
    api
      .setProfileAvatar(obj.avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  function handleAddPlaceSubmit(card) {
    setIsLoading(true);
    api
      .setNewCard(card)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleCardDelete(card) {
    setIsLoading(true);
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleConfirmationClick(card) {
    setIsConfirmationPopupOpen(true);
    setRemovedCard(card);
  }

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmationPopupOpen(false);
    setIsInfoTooltipOpen(false);
    setSelectedCard({});
  }

  const navigate = useNavigate();

  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  function handleSuccessReg(email, password) {
    auth
      .register(password, email)
      .then((res) => {
        if (res) {
          setIsSuccessReg(true);
          navigate("/sign-in", { replace: true });
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setIsSuccessReg(false);
      })
      .finally(setIsInfoTooltipOpen(true));
  }

  useEffect(() => {
    handleTokenCheck();
  }, []);

  const handleTokenCheck = () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      if (token) {
        auth
          .getContent(token)
          .then((res) => {
            if (res) {
              const userEmail = res.data.email;
              setLoggedIn(true);
              setIsEmail(userEmail);
              navigate("/", { replace: true });
            }
          })
          .catch((err) => console.log(`Ошибка: ${err}`));
      }
    }
  };

  function signOut() {
    localStorage.removeItem("token");
    navigate("/sign-in", { replace: true });
    setIsNavbarOpen(false);
    setIsBurger(false);
  }

  const [isBurger, setIsBurger] = useState(false);

  function handleBurgerMenu() {
    setIsBurger(!isBurger);
    setIsNavbarOpen(!isNavbarOpen);
  }

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="root">
          <Navbar
            isEmail={isEmail}
            isNavbarOpen={isNavbarOpen}
            setIsNavbarOpen={setIsNavbarOpen}
            signOut={signOut}
          />

          <Header
            loggedIn={loggedIn}
            isEmail={isEmail}
            isBurger={isBurger}
            handleBurgerMenu={handleBurgerMenu}
            signOut={signOut}
          />

          <Routes>
            <Route
              path="*"
              element={
                loggedIn ? (
                  <Navigate to="/" replace />
                ) : (
                  <Navigate to="/sign-in" replace />
                )
              }
            />
            <Route
              path="sign-up"
              element={<Register handleSuccessReg={handleSuccessReg} />}
            />
            <Route
              path="sign-in"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route
              path="/"
              element={
                <ProtectedRouteElement
                  element={Main}
                  onEditProfile={handleEditProfileClick}
                  onEditAvatar={handleEditAvatarClick}
                  onAddPlace={handleAddPlaceClick}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
                  onSubmitCardDelete={handleConfirmationClick}
                  cards={cards}
                  loggedIn={loggedIn}
                />
              }
            />
          </Routes>

          <Footer />

          <InfoTooltip
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
            isSuccessReg={isSuccessReg}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            isLoading={isLoading}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
            isLoading={isLoading}
          />

          <ConfirmationPopup
            isOpen={isConfirmationPopupOpen}
            onClose={closeAllPopups}
            onCardDelete={handleCardDelete}
            removedCard={removedCard}
            isLoading={isLoading}
          />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
