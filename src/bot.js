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
        const [CMD_NAME, ...args] = message.content.trim().substringsubstring(PREFIX.length).split(/\s+/)
    }

    if (CMD_NAME === "kick") {
        if (args.length === 0) return message.reply('Por favor informe um ID :P')
        const member = message.guild.members.cache.get(args[0])
        if (member) {
            member
                .kick()
                .then((member) => message.channel.send((`${member} foi kickado.`))
                    .catch((err) => message.channel.send('Permissoes insuficientes =[')))
        } else {
            message.channel.send('O usuario nao foi encontrado :@')
        }
    }
})

client.login(process.env.DISCORD_BOT_TOKEN)


