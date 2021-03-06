'use strict'

const platform = require('./src/platform')
const node = require('./src/platform/node')
const TracerProxy = require('./src/proxy')

platform.use(node)

module.exports = new TracerProxy()
