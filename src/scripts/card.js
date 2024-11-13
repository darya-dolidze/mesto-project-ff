function createCard(cardTemplate, element, delFunc, popupOpenFunc) {
    const template = cardTemplate.content;
    const cardElement = template.querySelector(".places__item").cloneNode(true);

    const cardImage = cardElement.querySelector(".card__image");
    cardImage.setAttribute("src", element.link);
    cardImage.setAttribute("alt", element.name);
    cardElement.querySelector(".card__title").textContent = element.name;

    const deleteButton = cardElement.querySelector(".card__delete-button");
    deleteButton.addEventListener('click', delFunc);

    cardImage.addEventListener('click', () => {
        popupOpenFunc(element.link, element.name)
    })

    return cardElement;
}

export { createCard };