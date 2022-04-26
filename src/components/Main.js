import React from 'react';
import api from "../utils/Api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

const Main = ({onEditAvatar, onAddPlace, onEditProfile, onCardClick}) => {
    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            })
            .catch((err) => {
                console.log(err)
            })
    }

    React.useEffect(() => {
        api.getCards()
            .then((cardsData) => {
                setCards(cardsData)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container">
                    {currentUser.avatar && (<img  className="profile__avatar"
                                          src={currentUser.avatar}
                                          alt='Аватар'
                    />)}
                    <button type="button"
                            className="profile__avatar-button"
                            onClick={onEditAvatar}
                    />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">
                        {currentUser.name}
                    </h1>
                    <button type="button"
                            className="profile__edit-button page__button"
                            onClick={onEditProfile}
                    />
                    <p className="profile__description">
                        {currentUser.about}
                    </p>
                </div>
                <button type="button"
                        className="profile__add-button page__button"
                        onClick={onAddPlace}
                />
            </section>
            <section className="elements">
                {
                    cards.map((card) =>
                        <Card key={card._id}
                              card={card}
                              onCardClick={onCardClick}
                              onCardLike={handleCardLike}
                        />
                    )
                }
            </section>
        </main>
    );
};

export default Main;