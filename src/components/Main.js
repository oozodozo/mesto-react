import React from 'react';
import api from "../utils/Api";
import Card from "./Card";

const Main = (props) => {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setUserName(userData.name)
                setUserDescription(userData.about)
                setUserAvatar(userData.avatar)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

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
                    <img className="profile__avatar"
                         src={userAvatar}
                         alt="Аватар"
                    />
                    <button type="button"
                            className="profile__avatar-button"
                            onClick={props.onEditAvatar}
                    />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">
                        {userName}
                    </h1>
                    <button type="button"
                            className="profile__edit-button page__button"
                            onClick={props.onEditProfile}
                    />
                    <p className="profile__description">
                        {userDescription}
                    </p>
                </div>
                <button type="button"
                        className="profile__add-button page__button"
                        onClick={props.onAddPlace}
                />
            </section>
            <section className="elements">
                {
                    cards.map((card) =>
                        <Card key={card._id}
                              card={card}
                              onCardClick={props.onCardClick}
                        />
                    )
                }
            </section>
        </main>
    );
};

export default Main;