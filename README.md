<img style="border-radius: 50%;" align="left" width=80px height=80px src="https://i.ibb.co/27n40Xx/bot-avatar.png" alt="Project logo" >

# Discord BOT
### Carrot 🥕

![GitHub last commit](https://img.shields.io/github/last-commit/pajka-js/discord-bot) [![Discord](https://img.shields.io/discord/665924269426868247.svg?label=Pajka's%20Discord&logo=discord&logoColor=ffffff&color=7389D8&labelColor=237289DA)](https://discord.gg/eSUGj3p) ![GitHub followers](https://img.shields.io/github/followers/pajka-js?style=social)

---

## 🧐 About <a name = "about"></a>

A chat bot for Discord app based off ```discord.js```.

## 📝 List of commands

*Soon.*

Write ```!help``` to the chat to get a full list of available commands.

## Permissions

What things you need to install the software and how to install them.

| Permission    | Reason                                       |
| ------------- | -------------------------------------------- |
| *Read Messages* | Detect the commands               |
| *Send messages* | Respond to commands  |
| *Manage Messages* | Can delete or edit messages |
| *View Channel* |                           |
| *Connect* |                                      |
| *Speak* |                                       |
| *Mention __@everyone__, __@here__, and __All Roles__* | |
| *Kick members* |      Kick innactive members               |
| *Ban members* |       For fun                                |



## Installing

[Connect to discord](https://discord.com/oauth2/authorize?client_id=752902171342667817&scope=bot&permissions=2146958839) (currently unnavailable)


## 🚀 Code example

```javascript
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Carrot is online!');
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('token');
```

## 🔗 Useful links

If you want to make your own discord bot, I recommend you these sites:
- [Discord.js](https://discord.js.org/#/)
- [Basic documentation](https://discord.js.org/#/docs/main/master/general/welcome)
- [Github](https://github.com/discordjs/discord.js) - Official *discord.js* Github
- Built using [Node.js](https://nodejs.org/en/)
- [Discord API](https://discord.com/invite/discord-api) - join the chat


#### Extensions

- [RPC](https://www.npmjs.com/package/discord-rpc) ([What is Discord RPC?](https://developer.valvesoftware.com/wiki/Implementing_Discord_RPC#:~:text=Discord%20RPC%20is%20a%20library,Windows%2C%20macOS%2C%20and%20Linux.))
