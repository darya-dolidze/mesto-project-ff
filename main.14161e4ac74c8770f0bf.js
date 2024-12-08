(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-27",headers:{authorization:"4f25c605-18d8-41ec-93d0-54112ea3eff9","Content-Type":"application/json"}};function t(e,t,n,r,o,c){var a=e.content.querySelector(".places__item").cloneNode(!0),i=a.querySelector(".card__like-count"),u=a.querySelector(".card__image");u.setAttribute("src",n.link),u.setAttribute("alt",n.name),a.querySelector(".card__title").textContent=n.name,i.textContent=n.likes?n.likes.length:0;var l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),d=n.likes.some((function(e){return e._id===t}));return t!==n.owner._id?l.style.display="none":l.addEventListener("click",(function(){r(a,n._id)})),d&&s.classList.add("card__like-button_is-active"),s.addEventListener("click",(function(){c(s,n._id,i)})),u.addEventListener("click",(function(){o(n.link,n.name)})),a}function n(t,n){(function(t){return fetch("".concat(e.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:e.headers}).then((function(e){return e.json()}))})(n).then((function(){t.remove()})).catch((function(e){console.error("Ошибка при удалении карточки:",e)}))}function r(t,n,r){var o=t.classList.contains("card__like-button_is-active");(function(t,n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:n?"DELETE":"PUT",headers:e.headers}).then((function(e){if(!e.ok)throw new Error("Ошибка: ".concat(e.status));return e.json()}))})(n,o).then((function(e){t.classList.toggle("card__like-button_is-active",!o),r.textContent=e.likes.length})).catch((function(e){console.error("Ошибка при обновлении лайков:",e)}))}function o(e){e.classList.add("popup_is-opened"),e.addEventListener("mousedown",a),document.addEventListener("keydown",i)}function c(e){e.classList.remove("popup_is-opened"),e.removeEventListener("mousedown",a),document.removeEventListener("keydown",i)}function a(e){e.target===e.currentTarget&&c(e.target)}function i(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}var u=function(e,t,n){var r=n.inputErrorClass,o=n.errorClass,c=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r),c.classList.remove(o),c.textContent=""},l=function(e,t,n){var r=n.inactiveButtonClass;!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(r)):(t.disabled=!0,t.classList.add(r))},s=function(e,t){var n=t.inputSelector,r=t.inactiveButtonClass,o=t.submitButtonSelector,c=Array.from(e.querySelectorAll(n)),a=e.querySelector(o);c.forEach((function(n){u(e,n,t)})),a.classList.add(r)};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector("#card-template"),p=document.querySelector(".places__list"),m=document.querySelectorAll(".popup"),_=document.querySelector(".popup_type_edit"),y=document.querySelector(".profile__edit-button"),v=document.querySelector(".profile__title"),h=document.querySelector(".profile__description"),b=document.querySelector(".profile__image"),S=document.forms["edit-profile"],q=S.elements.name,C=S.elements.description,E=document.querySelector(".popup_type_new-card"),L=document.querySelector(".profile__add-button"),k=document.forms["new-place"],g=k.elements["place-name"],x=k.elements.link,A=document.querySelector(".popup_type_image"),w=A.querySelector(".popup__image"),j=A.querySelector(".popup__caption"),U=document.querySelectorAll(".popup__close"),T=document.querySelector(".profile__image-button"),O=document.querySelector(".popup_type_new-avatar"),B=document.forms["new-avatar"],D=B.elements.link,I={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},P="";function M(e,t){w.src=e,w.alt=t,j.textContent=t,o(A)}Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return e.json()})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return e.json()}))]).then((function(e){var o,c,a=(c=2,function(e){if(Array.isArray(e))return e}(o=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(o,c)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(o,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],u=a[1];v.textContent=i.name,h.textContent=i.about,b.style.backgroundImage="url(".concat(i.avatar,")"),P=i._id,u.forEach((function(e){var o=t(f,P,e,n,M,r);p.append(o)}))})),m.forEach((function(e){e.classList.add("popup_is-animated")})),T.addEventListener("click",(function(){s(B,I),B.reset(),o(O)})),y.addEventListener("click",(function(){q.value=v.textContent,C.value=h.textContent,s(S,I),o(_)})),L.addEventListener("click",(function(){s(k,I),o(E)})),U.forEach((function(e){e.addEventListener("click",(function(e){c(e.target.closest(".popup"))}))})),S.addEventListener("submit",(function(t){t.preventDefault();var n,r,o=B.querySelector(".popup__button");o.textContent="Сохранение...",(n=q.value,r=C.value,fetch("".concat(e.baseUrl,"/users/me "),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return e.json()}))).then((function(e){v.textContent=e.name,h.textContent=e.about,c(_)})).catch((function(e){console.error("Ошибка при выполнении запроса:",e),alert("Возникла ошибка. Пожалуйста, попробуйте снова.")})).finally((function(){o.textContent="Сохранить"}))})),k.addEventListener("submit",(function(o){o.preventDefault();var a,i,u=B.querySelector(".popup__button");u.textContent="Сохранение...",(a=g.value,i=x.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:a,link:i})}).then((function(e){return e.json()}))).then((function(e){e.name,e.link;var o=t(f,P,e,n,M,r);p.prepend(o),k.reset(),c(E)})).catch((function(e){console.error("Ошибка при выполнении запроса:",e),alert("Возникла ошибка. Пожалуйста, попробуйте снова.")})).finally((function(){u.textContent="Сохранить"}))})),B.addEventListener("submit",(function(t){t.preventDefault();var n,r=B.querySelector(".popup__button");r.textContent="Сохранение...",(n=D.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:n})}).then((function(e){return e.json()}))).then((function(e){b.style.backgroundImage="url(".concat(e.avatar,")"),c(O),B.reset()})).catch((function(e){console.error("Ошибка при выполнении запроса:",e),alert("Возникла ошибка. Пожалуйста, попробуйте снова.")})).finally((function(){r.textContent="Сохранить"}))})),function(e){var t=e.formSelector;Array.from(document.querySelectorAll(t)).forEach((function(t){!function(e,t){var n=t.inputSelector,r=t.submitButtonSelector,o=Array.from(e.querySelectorAll(n)),c=e.querySelector(r);l(o,c,t),o.forEach((function(n){n.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?u(e,t,n):function(e,t,n,r){var o=r.inputErrorClass,c=r.errorClass,a=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o),a.textContent=n,a.classList.add(c)}(e,t,t.validationMessage,n)}(e,n,t),l(o,c,t)}))}))}(t,e)}))}(I)})();