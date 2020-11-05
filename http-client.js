const http = require('http')
const content = process.argv[2];

http.get(content, function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)