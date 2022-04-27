import React from 'react';
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({isOpen, onClose, onAddPlace, renderLoad}) => {

     const [name, setName] = React.useState('');
     const [link, setLink] = React.useState('');

     function handleNameChange(e) {
         setName(e.target.value);
     }

     function handleLinkChange(e) {
         setLink(e.target.value);
     }

     function handleSubmit(e) {
         e.preventDefault();
         onAddPlace({
             name,
             link
         });
         e.target.reset();
     }

    return (
        <PopupWithForm
            name='add-element'
            title='Новое место'
            isOpen={isOpen}
            onClose={onClose}
            buttonText={renderLoad ? 'Добавление...' : 'Добавить'}
            onSubmit={handleSubmit}
        >
            <fieldset className="popup__fieldset">
                <input name="name"
                       type="text"
                       id="place-title"
                       onChange={handleNameChange}
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
                       onChange={handleLinkChange}
                       className="popup__input popup__image-link"
                       placeholder="Ссылка на картинку"
                       pattern="[a-zA-Zа-яА-я\-\S]+$"
                       required />
                <span className="popup__error image-link-error" />
            </fieldset>
        </PopupWithForm>
    );
};

export default AddPlacePopup;