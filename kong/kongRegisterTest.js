const kongOptions = require("./kong.local.options")
const {KongRegister} = require('@payfun/node-kong')
KongRegister(kongOptions)
