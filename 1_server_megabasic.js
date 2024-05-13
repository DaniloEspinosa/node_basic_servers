const http = require("node:http")

// Manera de ver todos los codigos de status que existen y una breve descripción
// console.log(http.STATUS_CODES)

let numPeticiones = 1

const servidor = http.createServer((request, response)=>{
    // console.log(`Peticion ${numPeticiones++}`)
    // response.writeHead(200, { "Content-Type" : "text/plain"})
    // response.end("Hola mundo")

    // response.writeHead(200, { "Content-Type" : "application/json"})
    // response.end(JSON.stringify({mensaje: "Hola Mundito"}))

    // console.log("url:", request.url)  // devuelve la direccion url requerida
    // console.log(request.method)
    // console.log(request.headers)
    console.log(response.statusCode) // Devuelve el código de respuesta del servidor
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({mensaje: "Hola amiguis"}))


})

servidor.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000")
})