import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

const App = () => {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    const [currentUser, setCurrentUser] = React.useState({});

    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleUpdateUser(userData) {
        api.setUserInfo(userData)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />
                <Footer />
                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                />
                <PopupWithForm
                    name='add-element'
                    title='Новое место'
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    buttonText='Сохранить'
                >
                    <fieldset className="popup__fieldset">
                      <input name="name"
                             type="text"
                             id="place-title"
                             className="popup__input popup__place-title"
                             placeholder="Название"
                             minLength="2"
                             maxLength="30"
                             pattern="[a-zA-Zа-яА-я\-\s]+$"
                             required />
                      <span className="popup__error place-title-error" />
                      <input name="link"
                             type="url"
                             id="image-link"
                             className="popup__input popup__image-link"
                             placeholder="Ссылка на картинку"
                             pattern="[a-zA-Zа-яА-я\-\S]+$"
                             required />
                      <span className="popup__error image-link-error" />
                    </fieldset>
                </PopupWithForm>
                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />
                <PopupWithForm
                    name='delete-element'
                    title='Вы уверены?'
                    buttonText='Да'
                />
                <PopupWithForm
                    name='edit-avatar'
                    title='Обновить аватар'
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    buttonText='Сохранить'
                >
                    <fieldset className="popup__fieldset">
                      <input name="avatarLink"
                             type="url"
                             id="avatar-link"
                             className="popup__input popup__avatar-link"
                             placeholder="Ссылка на картинку"
                             pattern="[a-zA-Zа-яА-я\-\S]+$"
                             required />
                      <span className="popup__error avatar-link-error" />
                    </fieldset>
                </PopupWithForm>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
