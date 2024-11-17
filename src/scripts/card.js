function createCard(cardTemplate, element, delFunc, popupOpenFunc, likeFunc) {
    const template = cardTemplate.content;
    const cardElement = template.querySelector(".places__item").cloneNode(true);

    const cardImage = cardElement.querySelector(".card__image");
    cardImage.setAttribute("src", element.link);
    cardImage.setAttribute("alt", element.name);
    cardElement.querySelector(".card__title").textContent = element.name;

    const deleteButton = cardElement.querySelector(".card__delete-button");
    deleteButton.addEventListener('click', delFunc);

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', likeFunc);

    cardImage.addEventListener('click', () => {
        popupOpenFunc(element.link, element.name)
    })

    return cardElement;
};

function deleteCard(evt) {
    const evtTarget = evt.target;
    const listItem = evtTarget.closest(".places__item");
    listItem.remove();
}

function handlLikeCard(evt) {
    evt.target.classList.toggle('card__like-button_is-active')
}

export { createCard, deleteCard, handlLikeCard };