const kongOptions = require("./kong.api.options")
const {KongRegister} = require('@payfun/node-kong')
KongRegister(kongOptions)
