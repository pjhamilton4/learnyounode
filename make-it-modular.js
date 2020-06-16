const mymodule = require('./mymodule.js');

//Directory to process
dir = process.argv[2];
fileExtension = process.argv[3];

mymodule(dir, fileExtension, function(err, data){
    if (err) return console.error('There was an error:', err);

    data.forEach(function (file) {
        console.log(file);
    });
});
