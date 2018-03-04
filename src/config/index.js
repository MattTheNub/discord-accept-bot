/**
 * This class contains all the functions for the config
 */
class ConfigFunctions {
  constructor () {
    this.prefix = '/'
    this.command = 'accept'
    this.channel = 'rules'
  }
  /**
   * Sets the prefix
   * @param {string} prefix The prefix to use
   * @example
   * setPrefix('!') // Now users will use !accept
   */
  setPrefix (prefix) {
    this.prefix = prefix
  }
  /**
   * Sets the "accept" command
   * @param {string} command The command to use
   * @example
   * setCommand('agree') // Now users will use /agree
   */
  setCommand (command) {
    this.command = command
  }
  /**
   * Sets the channel that users have to use to accept the rules
   * @param {string} channel The channel to use
   * @example
   * setChannel('welcome') // Now users will use /accept in #welcome
   */
  setChannel (channel) {
    this.channel = channel
  }
  /**
   * Set the "accepted" role (reqired)
   * @param {Snowflake} role the role ID
   * @typedef {string} Snowflake a string containing a number
   */
  setRole (role) {
    this.role = role
  }
  /**
   * Sets the bot's login token (required)
   * @param {string} token The login token
   */
  login (token) {
    this.token = token
  }
}

class ConfigReader {
  /**
   * Initializes a new configuration reader
   * @param {function} config The configuration function
   */
  constructor (config) {
    this.config = config
  }
  /**
   * Read the config
   * @returns {Object} An object containing the configuration
   */
  read () {
    let functions = new ConfigFunctions()
    this.config(functions)
    return functions
  }
}

module.exports = { ConfigFunctions, ConfigReader }
