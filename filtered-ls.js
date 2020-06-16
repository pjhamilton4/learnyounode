const fs = require('fs');

//Directory to process
dir = process.argv[2];
fileExtension = process.argv[3];

function lsDir(callback) {
    fs.readdir(dir, function processDir(err, data) {

        if (err) {
            console.log('Error finding files: ' + err)
        } else {
            data.forEach(element => {
                if (element.endsWith("." + fileExtension)) {
                    console.log(element);
                }
            });
        }

        callback();
    });
};

function readDirectory() {
}

lsDir(readDirectory);