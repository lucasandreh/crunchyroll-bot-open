setTimeout(() => {
    if(window.location.href.indexOf('/watch')) {
        chrome.storage.sync.get(({discordUser}) => {
            const [ name, tag ] = discordUser.split('#');
            let location = '';
            function getAnime() {
                const anime = document.querySelector(".show-title-link h4");
                const episode = document.querySelector(".erc-current-media-info h2");
                setTimeout(async () => {
                await fetch(`https://crunchyroll-bot.herokuapp.com/?anime=${anime.textContent}&episode=${episode.textContent}&url=${window.location.href}&user=${name}&tag=${tag}`, {
                        method: "post"
                });
            }, 3000);
        }
                setInterval(() => {
                    if(window.location.href !== location) {
                        location = window.location.href;
                        console.log(location);
                        getAnime();
                    }
                }, 5 * 1000)
        });
    }
}, 5000)