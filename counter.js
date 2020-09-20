const Discord = require('discord.js')
const client = new Discord.Client();
//const client = require('./client/Client');

// Ctrl+Shift+P

const token = require("./config.json").token;
// console.log(token);
client.login(token);

client.on('ready', () => {
    let myGuild = client.guilds.cache.get('665924269426868247'); // subclass of JS map, ID of my Server
    let memberCount = myGuild.memberCount;
    console.log(memberCount);
    let memberCountChannel = myGuild.channels.cache.get('757344958771494935');
    memberCountChannel.setName('Members: ' + memberCount)
        .then(result => console.log(result))
        .catch(error => console.log(error));
        
});


