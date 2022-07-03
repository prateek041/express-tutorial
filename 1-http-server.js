const http = require('http')

const server = http.createServer((req, res) => { // this callback function will be triggered every time someone visits our website.
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1> hehe boii </h1>')
    res.end()
})

server.listen(5001)