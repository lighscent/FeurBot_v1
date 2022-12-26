module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client) {
        const { db } = require("quick.eco");
        let count = db.fetch(`guild_${message.guild.id}`);
        if (!message.author.bot) {
            if (count === null) count = db.set(`guild_${message.guild.id}`, {
                number: 0,
                guild: message.guild.name,
                id: message.guild.id,
            });

            if (message.content.toLowerCase().includes("quoi")) {
                message.reply('Feur')
                count = db.set(`guild_${message.guild.id}`, { number: count.number + 1, guild: message.guild.name, id: message.guild.id });
            } else if (message.content.toLowerCase().includes("pk")) {
                message.reply('Feur')
                count = db.set(`guild_${message.guild.id}`, { number: count.number + 1, guild: message.guild.name, id: message.guild.id });
            } else if (message.content.toLowerCase().includes("koi")) {
                message.reply('Feur')
                count = db.set(`guild_${message.guild.id}`, { number: count.number + 1, guild: message.guild.name, id: message.guild.id });
            } else if (message.content.toLowerCase().includes("qwa")) {
                message.reply('Feur')
                count = db.set(`guild_${message.guild.id}`, { number: count.number + 1, guild: message.guild.name, id: message.guild.id });
            }
        }
    }
}