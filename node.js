const http = require('http')
const fs = require('fs')
const port = 29000
const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('Amazon shopping.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error.File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('amazon.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error.File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('Nextpage.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error.File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('shoedetails.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error.File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })

    res.write('hello node')
    res.end()
})
server.listen(port, function(error) {
    if (error) {
        console.log('something went wrong', error)
    } else {
        console.log('server is listeing on port' + port)

    }

})