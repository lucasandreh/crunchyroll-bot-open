chrome.storage.sync.get(({discordUser}) => {
    const [ name, tag ] = discordUser.split('#');

    const site_url = "URL DO SEU SITE";

    setTimeout(() => {
        const anime = document.querySelector(".show-title-link h4");
        const episode = document.querySelector(".erc-current-media-info h2");
        const nextEpisode = document.querySelector(".c-playable-card-mini__link");
    
        console.log({
            anime: anime.textContent,
            episode: episode.textContent
        });
    
        setTimeout(async () => {
            await fetch(`${site_url}?anime=${anime.textContent}&episode=${episode.textContent}&url=${window.location.href}&user=${name}&tag=${tag}`, {
                method: "post"
            });        
        }, 5000)
    
         function getAnime() {
            setTimeout(() => {
                const anime = document.querySelector(".show-title-link h4");
                const episode = document.querySelector(".erc-current-media-info h2");
                const nextEpisode = document.querySelector(".c-playable-card-mini__link");
    
                console.log({
                    anime: anime.textContent,
                    episode: episode.textContent
                });
    
                setTimeout(async () => {
                    await fetch(`${site_url}?anime=${anime.textContent}&episode=${episode.textContent}&url=${window.location.href}&user=${name}&tag=${tag}`, {
                    method: "post"
                });
                }, 5000)
    
                nextEpisode.addEventListener("click", () => {
                    getAnime();
                });
            }, 3000);
        }
    
        nextEpisode.addEventListener("click", () => {
            getAnime();
        });
    }, 3000);
});