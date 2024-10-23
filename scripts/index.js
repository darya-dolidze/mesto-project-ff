const cardTemplate = document.querySelector("#card-template");

const placeList = document.querySelector(".places__list");
// @todo: DOM узлы

// @todo: Функция создания карточки
function createCard(cardTemplate, element, callback) {
    const template = cardTemplate.content;
    cardElement = template.querySelector(".places__item").cloneNode(true);

    const cardImage = cardElement.querySelector(".card__image");
    cardImage.setAttribute("src", element.link);
    cardImage.setAttribute("alt", element.name);
    cardElement.querySelector(".card__title").textContent = element.name;

    const deleteButton = cardElement.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", callback);

    return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
    const evtTarget = evt.target;
    const listItem = evtTarget.closest(".places__item");
    listItem.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((element,) => {
    const cardElement = createCard(
    cardTemplate,
    element,
    deleteCard
    );

    placeList.append(cardElement);
})
