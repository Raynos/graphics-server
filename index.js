var server = require("tryme/server")
var path = require("path")

server({
    root: [path.join(__dirname, "node_modules", "graphics", "examples")]
})
