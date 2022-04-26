import React from 'react';
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({isOpen, onClose, onUpdateAvatar}) => {

    const avatarRef = React.useRef('');

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    return (
        <PopupWithForm
            name='edit-avatar'
            title='Обновить аватар'
            isOpen={isOpen}
            onClose={onClose}
            buttonText='Сохранить'
            onSubmit={handleSubmit}
        >
            <fieldset className="popup__fieldset">
                <input name="avatarLink"
                       type="url"
                       id="avatar-link"
                       className="popup__input popup__avatar-link"
                       placeholder="Ссылка на картинку"
                       pattern="[a-zA-Zа-яА-я\-\S]+$"
                       required
                       ref={avatarRef}
                />
                <span className="popup__error avatar-link-error" />
            </fieldset>
        </PopupWithForm>
    );
};

export default EditAvatarPopup;