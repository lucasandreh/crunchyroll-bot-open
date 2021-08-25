const button = document.querySelector("#btn");
const update = document.querySelector('#relogar')
const username = document.querySelector('#username');
const avatar = document.querySelector('.avatar-image');

const client_url = "URL DE PERMISSÕES DO SEU BOT";

window.onload = () => {
    chrome.storage.sync.get(({discordUser}) => {
        if(discordUser) {
            username.setAttribute('class', 'usuario');
            username.textContent = discordUser;
            button.style.display = "none";
            update.style.display = "block";
        }
    });

    chrome.storage.sync.get(({discordUserAvatar}) => {
        chrome.storage.sync.get(({discordUserId}) => {
            if(discordUserId) {
                avatar.style.display = "flex";
                avatar.setAttribute('src', `https://cdn.discordapp.com/avatars/${discordUserId}/${discordUserAvatar}.png?size=2048`);
            }
        });
    });

};

button.addEventListener("click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            let url = client_url
            chrome.tabs.update(undefined, { url });
        });
});

update.addEventListener("click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            let url = client_url
            chrome.tabs.update(undefined, { url });
        });
});