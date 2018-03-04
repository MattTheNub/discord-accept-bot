#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const AcceptBot = require('discord-accept-bot/src/bot')
const { ConfigReader } = require('discord-accept-bot/src/config')

var config = {}
if (config.config || config.c) {
  let configReader = new ConfigReader(require(config.config || config.c))
  config = configReader.read()
} else {
  config.prefix = argv.prefix || argv.p || '/'
  config.channel = argv.channel || argv.h || 'rules'
  config.command = argv.command || argv.d || 'accept'
  config.role = argv.role || argv.r
  config.token = argv.token || argv.t
}
const acceptBot = new AcceptBot(config)
void acceptBot
