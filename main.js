const Discord = require('discord.js')
const fs = require('fs');
const client = new Discord.Client();

const {
	prefix,
	token,
} = require('./config.json');


client.command = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); // ensure that the command file ends with .js

// we are gonna loop the files to make sure it is the correct file
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Carrot is online!')
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
})


client.login(token);