require('dotenv').config()

const { Client } = require('discord.js')
const client = new Client()

const WebhookClient = new WebhookClient(
    process.env.WEBHOOK_ID,
    process.env.WEBHOOK_CLIENT

)
const PREFIX = "$"

client.on('ready', () => {
    console.log(`${client.user.tag} está logado`)
})

client.on('message', async (message) => {
    if (message.author.bot) return
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content.trim().substringsubstring(PREFIX.length).split(/\s+/)
    }

    if (CMD_NAME === "kick") {
        if (message.member.hasPermission('KICK_MEMBERS'))
            return message.reply('Voce nao tem permissao pra usar esse comando :[')
        if (args.length === 0) return message.reply('Por favor informe um ID :P')
        const member = message.guild.members.cache.get(args[0])
        if (member) {
            member
                .kick()
                .then((member) => message.channel.send((`${member} foi kickado.`))
                    .catch((err) => message.channel.send('Permissoes insuficientes :[')))
        } else {
            message.channel.send('O usuario nao foi encontrado :X')
        }
    } else if (CMD_NAME === 'ban') {
        if (!message.member.hasPermission('BAN_MEMBERS'))
            return message.reply('Voce nao tem permissao pra usar esse comando :[')
        if (args.length === 0) return message.reply('Por favor informe um ID :P')

        try {
            const user = await message.guild.members.ban(args[0])
            message.channel.send('O usuario foi banido! >:)')
            console.log(user)
        } catch (err) {
            console.log(err)
            message.channel.send('Erro! Nao foi possivel banir o usuario >:(')
        }
    } 
})

client.login(process.env.DISCORD_BOT_TOKEN)


