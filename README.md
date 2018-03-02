# discord-accept-bot
A simple bot for people to be able to accept rules by doing `/accept`
## Running locally
```sh
git clone git@github.com:MegaCode18/discord-accept-bot.git
cd discord-accept-bot
yarn
grunt server # Make sure to install Grunt globally
```
## Configuring
All configuration is stored in a `.config.js` file. Here is an example of such a file:
```js
module.exports = accept => {
  accept.setPrefix('!') // Prefix to use | Default: /
  accept.setCommand('agree') // Command to use | Default: accept
  accept.setChannel('welcome') // Channel members need to use to accept | Default: #rules
  accept.setRole('123467890987654321') // Role ID to assign once rules are accepted
  accept.login('abcdefg.ABCDEFG.1234567') // Login token
}
```
