const fs = require ('fs');
const file = process.argv[2];

fs.readFile (file, function(err, contents){ 
    if(err){
        console.log(err)
    }
    const result = contents.toString().split('\n').length - 1
    console.log(result)
})


