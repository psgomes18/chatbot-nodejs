require('dotenv').config()

const { Client } = require('discord.js')
const client = new Client()
const PREFIX = "$"

client.on('ready', () => {
    console.log(`${client.user.tag} está logado`)
})

client.on('message', (message) => {
    if (message.author.bot) return
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content.trim().substringsubstring(PREFIX.length).split(' ')

    }
})

client.login(process.env.DISCORD_BOT_TOKEN)


