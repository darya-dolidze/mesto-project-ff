(()=>{"use strict";function e(e,t,n,o,r){var c=e.content.querySelector(".places__item").cloneNode(!0),i=c.querySelector(".card__image");return i.setAttribute("src",t.link),i.setAttribute("alt",t.name),c.querySelector(".card__title").textContent=t.name,c.querySelector(".card__delete-button").addEventListener("click",n),c.querySelector(".card__like-button").addEventListener("click",r),i.addEventListener("click",(function(){o(t.link,t.name)})),c}function t(e){e.target.closest(".places__item").remove()}function n(e){e.target.classList.toggle("card__like-button_is-active")}function o(e){e.classList.add("popup_is-opened"),e.addEventListener("mousedown",c),document.addEventListener("keydown",i)}function r(e){e.classList.remove("popup_is-opened"),e.removeEventListener("mousedown",c),document.removeEventListener("keydown",i)}function c(e){e.target===e.currentTarget&&r(e.target)}function i(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}var p=document.querySelector("#card-template"),a=document.querySelector(".places__list"),s=document.querySelectorAll(".popup"),u=document.querySelector(".popup_type_edit"),d=document.querySelector(".profile__edit-button"),l=document.querySelector(".profile__title"),m=document.querySelector(".profile__description"),_=document.forms["edit-profile"],f=_.elements.name,v=_.elements.description,y=document.querySelector(".popup_type_new-card"),k=document.querySelector(".profile__add-button"),q=document.forms["new-place"],S=q.elements["place-name"],L=q.elements.link,g=document.querySelector(".popup_type_image"),E=g.querySelector(".popup__image"),h=g.querySelector(".popup__caption"),b=document.querySelectorAll(".popup__close");function x(e,t){E.src=e,E.alt=t,h.textContent=t,o(g)}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(o){var r=e(p,o,t,x,n);a.append(r)})),s.forEach((function(e){e.classList.add("popup_is-animated")})),d.addEventListener("click",(function(){f.value=l.textContent,v.value=m.textContent,o(u)})),k.addEventListener("click",(function(){o(y)})),b.forEach((function(e){e.addEventListener("click",(function(e){r(e.target.closest(".popup"))}))})),_.addEventListener("submit",(function(e){e.preventDefault(),l.textContent=f.value,m.textContent=v.value,r(u)})),q.addEventListener("submit",(function(o){o.preventDefault();var c={name:S.value,link:L.value},i=e(p,c,t,x,n);a.prepend(i),q.reset(),r(y)})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){!function(e){Array.from(e.querySelectorAll(".popup__input")).forEach((function(t){t.addEventListener("input",(function(){!function(e,t){t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__input_type_error"),n.classList.remove("popup__error_visible"),n.textContent=""}(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__input_type_error"),o.textContent=n,o.classList.add("popup__error_visible")}(e,t,t.validationMessage)}(e,t)}))}))}(e)}))})();