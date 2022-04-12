import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page">
        <header className="header">
          <img className="header__logo" src="" alt="Логотип Место" />
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__avatar-container">
              <img className="profile__avatar" src="#" alt="Аватар" />
                <button type="button" className="profile__avatar-button"/>
            </div>
            <div className="profile__info">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button type="button" className="profile__edit-button page__button"/>
              <p className="profile__description">Исследователь океана</p>
            </div>
            <button type="button" className="profile__add-button page__button"/>
          </section>
          <section className="elements"/>
        </main>
        <div className="popup popup_edit-profile">
          <div className="popup__container">
            <form className="popup__form" noValidate>
              <h2 className="popup__title">Редактировать профиль</h2>
              <fieldset className="popup__fieldset">
                <input name="name" type="text" id="name" className="popup__input popup__user-name" minLength="2"
                       maxLength="40" pattern="[a-zA-Zа-яА-я\-\s]+$" required />
                  <span className="popup__error name-error"/>
                  <input name="about" type="text" id="about" className="popup__input popup__user-about" minLength="2"
                         maxLength="200" pattern="[a-zA-Zа-яА-я\-\s]+$" required />
                    <span className="popup__error about-error"/>
                    <button type="submit" className="popup__button-submit">Сохранить</button>
              </fieldset>
            </form>
            <button type="reset" className="popup__reset-button page__button"/>
          </div>
        </div>
        <div className="popup popup_add-element">
          <div className="popup__container">
            <form className="popup__form" noValidate>
              <h2 className="popup__title">Новое место</h2>
              <fieldset className="popup__fieldset">
                <input name="name" type="text" id="place-title" className="popup__input popup__place-title"
                       placeholder="Название" minLength="2" maxLength="30" pattern="[a-zA-Zа-яА-я\-\s]+$" required />
                  <span className="popup__error place-title-error"/>
                  <input name="link" type="url" id="image-link" className="popup__input popup__image-link"
                         placeholder="Ссылка на картинку" pattern="[a-zA-Zа-яА-я\-\S]+$" required />
                    <span className="popup__error image-link-error"/>
                    <button type="submit" className="popup__button-submit popup__button-element-submit">Создать</button>
              </fieldset>
            </form>
            <button type="reset" className="popup__reset-button page__button"/>
          </div>
        </div>
        <div className="popup popup_zoom-image">
          <div className="popup__figure-container">
            <figure className="popup__figure">
              <img className="popup__image" src="#" alt="" />
                <figcaption className="popup__figcaption" />
            </figure>
            <button type="reset" className="popup__reset-button page__button" />
          </div>
        </div>
        <div className="popup popup_delete-element">
          <div className="popup__container">
            <form className="popup__form" noValidate>
              <h2 className="popup__title">Вы уверены?</h2>
              <button type="submit" className="popup__button-submit">Да</button>
            </form>
            <button type="reset" className="popup__reset-button page__button"/>
          </div>
        </div>
        <div className="popup popup_edit-avatar">
          <div className="popup__container">
            <form className="popup__form" noValidate>
              <h2 className="popup__title">Обновить аватар</h2>
              <fieldset className="popup__fieldset">
                <input name="avatarLink" type="url" id="avatar-link" className="popup__input popup__avatar-link"
                       placeholder="Ссылка на картинку" pattern="[a-zA-Zа-яА-я\-\S]+$" required />
                  <span className="popup__error avatar-link-error"/>
                  <button type="submit" className="popup__button-submit">Сохранить</button>
              </fieldset>
            </form>
            <button type="reset" className="popup__reset-button page__button"/>
          </div>
        </div>
        <footer className="footer">
          <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
