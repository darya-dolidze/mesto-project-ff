import './pages/index.css'; 
import { initialCards } from '../src/scripts/cards';
import { createCard } from './scripts/card';
import { openModal, closeModal } from './scripts/modal';

const cardTemplate = document.querySelector("#card-template");

const placeList = document.querySelector(".places__list");
// @todo: DOM узлы

const modals = document.querySelectorAll('.popup');
const profilePopupEdit = document.querySelector('.popup_type_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileForm = document.forms['edit-profile'];
const profileNameInput = profileForm.elements.name;
const profileDescriptionInput = profileForm.elements.description;

const newCardPopup = document.querySelector('.popup_type_new-card');
const newCardButton = document.querySelector('.profile__add-button');
const newCardForm = document.forms['new-place'];
const newCardNameInput = newCardForm.elements['place-name'];
const newCardLinkInput = newCardForm.elements.link;

const imagePopup = document.querySelector('.popup_type_image');
const cardImage = imagePopup.querySelector('.popup__image');
const cardCaption = imagePopup.querySelector('.popup__caption');

const popupCloseButton = document.querySelectorAll('.popup__close');

// @todo: Функция удаления карточки
function deleteCard(evt) {
    const evtTarget = evt.target;
    const listItem = evtTarget.closest(".places__item");
    listItem.remove();
}

function handlOpenImagePopup(link, name) {
    cardImage.src = link;
    cardCaption.textContent = name;
    openModal(imagePopup)
}

function handlProfileSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closeModal(profilePopupEdit);
}

function handlNewCardSubmit(evt) {
    evt.preventDefault();
    const newCardData = {
        name: newCardNameInput.value,
        link: newCardLinkInput.value
    };

    const newCard = createCard (
    cardTemplate,
    newCardData,
    deleteCard,
    handlOpenImagePopup
    )
}

// @todo: Вывести карточки на страницу
initialCards.forEach((element,) => {
    const cardElement = createCard(
    cardTemplate,
    element,
    deleteCard,
    handlOpenImagePopup
    );

    placeList.append(cardElement);
})

modals.forEach(modal => {
    modal.classlist.add('popup_is-animated')
});

profileEditButton.addEventListener('click', () => {
    profileNameInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    openModal(profilePopupEdit)
});

newCardButton.addEventListener('click', () => {
    openModal(newCardPopup)
});

popupCloseButton.forEach(button => {
    button.addEventListener('click', (evt) => {
        const modal = evt.target.closest('.popup');
        closeModal(newCardPopup)
    });
})

profileForm.addEventListener('submit', handlProfileSubmit)