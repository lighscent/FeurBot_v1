module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
        if (!message.author.bot) {
            if (message.content.toLowerCase().includes("quoi")) {
                message.reply('Feur')
            } else if (message.content.toLowerCase().includes("pk")) {
                message.reply('Feur')
            } else if (message.content.toLowerCase().includes("koi")) {
                message.reply('Feur')
            } else if (message.content.toLowerCase().includes("qwa")) {
                message.reply('Feur')
            }
        }
    }
}