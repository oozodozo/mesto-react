import React from 'react';

const Card = (props) => {

    function handleCardClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="element">
            <img className="element__image"
                 src={props.card.link}
                 alt={props.card.name}
                 onClick={handleCardClick}
            />
            <div className="element__description">
                <h2 className="element__title">
                    {props.card.name}
                </h2>
                <div className="element__like-container">
                    <button type="button"
                            className="element__like-button"
                    />
                    <span className="element__like-counter">
                        {props.card.likes.length}
                    </span>
                </div>
            </div>
            <button type="button"
                    className="element__trash-button page__button" />
        </article>
    );
};

export default Card;