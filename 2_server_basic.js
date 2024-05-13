const http = require('node:http')

const puerto = process.argv[2] || 0

const server = http.createServer((req, res) => {

    res.statusCode = 404
    if(res.statusCode === 200) {
        res.writeHead(200, {"content-Type" : "text/plain"})
        res.end("Todo OK!\n")
    } else if (res.statusCode === 404) {
        res.writeHead(404, {"content-Type" : "text/plain"})
        res.end("Página no encontrada.\n")
    }
})

server.listen(puerto, () => {
    console.log(`Server listening on http://localhost:${server.address().port}`)
})

console.log(process.argv)