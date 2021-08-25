const express = require('express'),
       app = express(),
       cors = require('cors'),
       DiscordOauth2 = require('discord-oauth2'), 
       auth = new DiscordOauth2(),
       { Client, MessageEmbed } = require('discord.js'),
       client = new Client(),
       port = process.env.PORT || 80,
       { client_id, client_token, client_redirect, client_secret, scope, channel_id } = require('./config.json') 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

client.on('ready', () => {
    console.log(`${client.user.username} está rodando.`)
});

app.post('/', (req, res) => {
    
    const { anime, episode, url, user, tag } = req.query
    const [number, name] = episode.split('-');

        client.setTimeout(() => {
            const channel = client.channels.cache.find(ch => ch.id === channel_id)
            const embed = new MessageEmbed()
                    .setColor('#DF6300')
                    .setThumbnail('https://iphone-image.apkpure.com/v2/app/d/3/0/d30452b00367b8c067731b875081960a.jpg')
                    .setAuthor(`${user}#${tag}`)
                    .addFields(
                        { name: 'Anime', value: anime, inline: false },
                        { name: `Episódio ${number.replace('E', '')}`, value: name, inline: false },
                    )
                    .setTimestamp()
                    .setFooter('Assistindo', 'https://iphone-image.apkpure.com/v2/app/d/3/0/d30452b00367b8c067731b875081960a.jpg');
            channel.send(embed);
        }, 3000);

    console.log({
        anime,
        episode,
        url,
        user,
        tag
    });

});

app.get('/login', async (req, res) => {
    const {code} = req.query;
     const login = await auth.tokenRequest({
        clientId: client_id,
        clientSecret: client_secret,
        code,
        scope: scope,
        grantType: "authorization_code",
        redirectUri: client_redirect
    }).then(response => response)

    const user = await auth.getUser(login.access_token).then(response => response);
    res.render('index', {
        user
    });
});

client.login(client_token);
app.listen(port, () => console.log(`App running http://localhost:${port}`));