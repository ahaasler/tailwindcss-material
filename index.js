const plugin = require("tailwindcss/plugin")
const colors = require("./colors")

module.exports = plugin(function () {}, { theme: { extend: { colors } } })
