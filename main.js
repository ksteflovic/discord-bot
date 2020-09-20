const Discord = require('discord.js')
const fs = require('fs');
const Client = new Discord.Client();
// const Client = require('./client/Client');

// Ctrl+Shift+P

const {
	prefix
} = require('./config.json');
const token = process.env.token;

const client = new Client();
client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); // ensure that the command file ends with .js

// we are gonna loop the files to make sure it is the correct file
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Carrot is online!');

    // counting...
    let myGuild = Client.guilds.cache.get('665924269426868247'); // subclass of JS map, ID of my Server
    let memberCount = myGuild.memberCount;
    console.log(memberCount);
    let memberCountChannel = myGuild.channels.cache.get('757344958771494935');
    memberCountChannel.setName('Members: ' + memberCount)
        .then(result => console.log(result))
        .catch(error => console.log(error));   
})

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot)
        return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    if(command === 'play'){
        client.commands.get('play').execute(message, args);
    }
})

client.login(token);