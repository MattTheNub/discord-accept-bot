const { ConfigReader } = require('./src/config')
const AcceptBot = require('./src/bot')

var configReader = new ConfigReader(require('./.config'))
var config = configReader.read()

const acceptBot = new AcceptBot(config)
