import React from 'react';
import api from "../utils/Api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

const Main = ({onEditAvatar, onAddPlace, onEditProfile, onCardClick}) => {
    const [cards, setCards] = React.useState([]);
    const userData = React.useContext(CurrentUserContext);

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
                    {userData.avatar && (<img  className="profile__avatar"
                                          src={userData.avatar}
                                          alt='Аватар'
                    />)}
                    <button type="button"
                            className="profile__avatar-button"
                            onClick={onEditAvatar}
                    />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">
                        {userData.name}
                    </h1>
                    <button type="button"
                            className="profile__edit-button page__button"
                            onClick={onEditProfile}
                    />
                    <p className="profile__description">
                        {userData.about}
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
                        />
                    )
                }
            </section>
        </main>
    );
};

export default Main;