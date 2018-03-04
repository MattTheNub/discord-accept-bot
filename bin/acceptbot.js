#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))
const AcceptBot = require('discord-accept-bot/src/bot')

var config = {}
config.prefix = argv.prefix || argv.p || '/'
config.channel = argv.channel || argv.h || 'rules'
config.command = argv.command || argv.d || 'accept'
config.role = argv.role || argv.r
config.token = argv.token || argv.t

const acceptBot = new AcceptBot(config)
void acceptBot
