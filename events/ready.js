module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        const package = require("../package.json")


        //--------------------------------------------------\\
        //--------------------------------------------------\\


        console.log("Bot Up")
        

        //--------------------------------------------------\\
        //--------------------------------------------------\\


        const statut = [
            () => `.gg/nitromask`,
            () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} Users`,
            () => `${client.guilds.cache.size} Serveurs`
        ]
        let i = 0
        setInterval(() => {
            client.user.setActivity(statut[i](), { type: 'WATCHING'})
            i = ++i % statut.length
        }, 1e4)
    }
}