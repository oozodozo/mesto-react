import React from 'react';

const PopupWithForm = (props) => {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <form className="popup__form"
                      name={props.name}
                      noValidate>
                    <h2 className="popup__title">
                        {props.title}
                    </h2>
                    {props.children}
                    <button type="submit" className="popup__button-submit">Сохранить</button>
                </form>
                <button type="reset"
                        className="popup__reset-button page__button"
                        onClick={props.onClose}
                />
            </div>
        </div>
    );
};

export default PopupWithForm;