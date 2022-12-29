const Discord = require("discord.js");
const client = new Discord.Client({
    intents: 3276799,
    partials: ["MESSAGE"]
});

const login = require("./utils/login.json");

const fs = require("fs");

client.commands = new Discord.Collection();

const Eco = require("quick.eco");
client.Eco = new Eco.Manager();
client.db = Eco.db;


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
        client.on(event.name, (...args) => event.execute(...args));
    }
}


client.on("messageCreate", async message => {
    const { db } = require("quick.eco");
    let count = db.fetch(`guild_${message.guild.id}`);

    const error = new Discord.MessageEmbed()
       .setTitle("Error")
       .setDescription(`Une erreur est survenu - [Support](https://discord.gg/maskfr)`)
       .setColor("#8A2BE2")
       .setTimestamp();
    const embed = new Discord.MessageEmbed()
       .setTitle(`${client.user.tag} - Statistiques`)
       .setDescription(`Merci à vous de m'utiliser ^^ - [Support](https://discord.gg/maskfr)`)
       .addField("Serveur Name", `${count.guild}`)
       .addField("Serveur ID", `${count.id}`)
       .addField("Feur Répondu", `${count.number}`)
       .setColor("#8A2BE2")
       .setTimestamp();

    if(!message.author.bot) {
        if(message.content === `<@842873773257916427>`) {
            if(count === null) {
                message.channel.send({ embeds: [error]})
            } else {
                message.channel.send({ embeds: [embed] })
            }
        }
    }
})

//--------------------------------------------------\\
//--------------------------------------------------\\


client.login(login.token);