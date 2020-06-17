const http = require('http');

const url = process.argv[2];

http.get(url, function(res, req){

    let charCount = 0;
    let dataWhole = "";

    res.setEncoding('utf8');

    res.on('data', function(chunk){
        charCount += chunk.length;
        dataWhole = dataWhole + chunk;
    })

    res.on('end', function(data){        
        console.log(charCount);
        console.log(dataWhole);
    });
});