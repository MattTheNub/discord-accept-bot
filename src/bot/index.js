const Discord = require('discord.js')

class AcceptBot {
  /**
   * Create a new Accept Bot
   * @param {Object} config The bot config
   */
  constructor (config) {
    const bot = new Discord.Client()
    bot.on('ready', () => {
      console.info('Connected')
      console.info('Logged in as:')
      console.info(`${bot.user.tag} (${bot.user.id})`)
    })
    bot.on('reconnecting', () => {
      console.info('Reconnecting...')
    })
    bot.on('message', message => {
      if (message.channel.name === config.channel) {
        if (message.content === `${config.prefix}${config.command}`) {
          message.guild.members
            .get(message.author.id)
            .addRole(config.role)
            .then(() => message.delete().catch(console.warn))
            .catch(console.warn)
        } else {
          message
            .delete()
            .catch(console.warn)
            .then(() =>
              message.author
                .send(
                  `Please don't send unrelated messages in #${config.channel}`
                )
                .catch(console.warn)
            )
        }
      }
    })

    bot.login(config.token)
  }
}

module.exports = AcceptBot
