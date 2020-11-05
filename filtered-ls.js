const path = require ('path') ;

const  fs = require ('fs') ; 


const directory = process.argv[2] ; 
const x = '.' + process.argv[3]

fs.readdir(directory, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (directory) {
        if (path.extname(directory) === x) {
            console.log(directory)
        }
    })
})