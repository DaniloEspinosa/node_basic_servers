// const http = require('node:http')  // Esto es en caso de importar todo http
const { createServer } = require('node:http')  // Aqui solo llamamos la funcionalidad que necesitamos de http

const puerto = process.argv[2] || 0

// const server = http.createServer((req, res) => {  // Esto es en caso de importar todo http
const server = createServer((req, res) => {

    let body = ""
    let title = ""
    if (req.url === "/") {
        title = "Página inicial"
        body = "<h1>Página inicial</h1>"
        body += `<p><a href="/node">Ir a la página NODE</a></p>`
    } else if (req.url === "/node") {
        title = "Página NODE"
        body = "<h1>Página NODE</h1>"
        body += `<p><a href="/">Ir a la página inicial</a></p>`
    } else {
        title = "Error 404"
        body = "<h1>Página no encontrada</h1>"
        body += `<p><a href="/">Ir a la página inicial</a></p>`
    }

    res.writeHead(200, { "Content-Type": "text/html" })
    res.write(`
        <html>
        <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <style>
         body{
            background-color: green;
            font-family: Arial, helvetica, sans-serif;
            text-align: center;
            color: white;
         }
         a {
            color: white;
         }
        </style>
        </head>
        <body>
        ${body}
        </body>
        </html>
    `)
    res.end()
})

server.listen(puerto, () => {
    console.log(`Server listening on http://localhost:${server.address().port}`)
})
