const config = {
    baseUrl: "https://nomoreparties.co/v1/wff-cohort-27",
    headers: {
        authorization: "4f25c605-18d8-41ec-93d0-54112ea3eff9",
        "Content-Type": "application/json",
    },
};

function getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`); 
    }
    return res.json();
}

export const getUserInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers,
    })
    .then(getResponseData);
}    

export const updateUserCard = (name, about) => {
    return fetch(`${config.baseUrl}/users/me `, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about
        })
    })
    .then(getResponseData);
}

export const updateUserAvatar = (link) => {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
        avatar: link,
    })
}).then(getResponseData);
};

export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
    .then(getResponseData);
};

export const addNewCards = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
    .then(getResponseData);
};

export const removeCard = (id) => {
    return fetch(`${config.baseUrl}/cards/${id}`, {
        method: "DELETE",
        headers: config.headers,
    })
    .then(getResponseData);
};

export const likeCard = (id, isLiked) => {
    return fetch(`${config.baseUrl}/cards/likes/${id}`, {
        method: isLiked ? "DELETE" : "PUT",
        headers: config.headers,
    }).then(res => {
        if (!res.ok) {
            throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
    });
};
