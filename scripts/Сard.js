export class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__text').textContent = this._name;
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._likeImage();
        });

        this._element.querySelector('.element__delete-button').addEventListener('click', () => {
            this._deleteCard();
        });
    }

    _likeImage() {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }

    _deleteCard() {
        const cardToDelete = this._element.querySelector('.element__delete-button').closest('.element');
        cardToDelete.remove();
    }
}