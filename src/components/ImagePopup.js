import React from 'react';

const ImagePopup = (props) => {

    return (
        <div className={`popup popup_zoom-image ${props.card ? 'popup_opened' : ''}`}>
            <div className="popup__figure-container">
                <figure className="popup__figure">
                    <img className="popup__image"
                         src={props.card ? props.card.link : ''}
                         alt={props.card ? props.card.name : ''}
                    />
                    <figcaption className="popup__figcaption">
                        {props.card ? props.card.name : ''}
                    </figcaption>
                </figure>
                <button type="reset"
                        className="popup__reset-button page__button"
                        onClick={props.onClose}
                />
            </div>
        </div>
    );
};

export default ImagePopup;