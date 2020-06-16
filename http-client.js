const http = require('http');

const url = process.argv[2];

http.get(url, function(res, req){

    res.setEncoding('utf8');

    res.on('data', function(data){
        console.log(data);
    })
});