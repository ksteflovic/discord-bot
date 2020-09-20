const Discord = require('discord.js')
const client = new Discord.Client();

const token = require("./config.json").token;

client.login(token)

client.on('ready', () => {
    console.log("Hello world!");
});


