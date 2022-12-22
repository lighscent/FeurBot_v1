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
            () => `djs ${package.dependencies["discord.js"]}`,
            () => `ItsAzukio`
        ]
        let i = 0
        setInterval(() => {
            client.user.setActivity(statut[i](), { type: 'WATCHING'})
            i = ++i % statut.length
        }, 1e4)
    }
}