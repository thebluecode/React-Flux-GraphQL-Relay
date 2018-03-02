var getBabelRelayPugin = require('babel-relay-plugin');

var schemaData = require('./data/schema.json').data;

module.exports = getBabelRelayPugin(schemaData);