const Discord = require("discord.js");
const client = new Discord.Client({
    intents: 3276799
});

const login = require("./utils/login.json");

const fs = require("fs");

client.commands = new Discord.Collection();


//--------------------------------------------------\\
//--------------------------------------------------\\


const eventsPath = __dirname + "/events";
const eventsFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".js"));

for (const file of eventsFiles) {
    const filePath = `${eventsPath}/${file}`
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(args));
    }
}


//--------------------------------------------------\\
//--------------------------------------------------\\


client.login(login.token);