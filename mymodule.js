const fs = require('fs');

module.exports = function filterDirectory(dir, fileExtension, callback){
    fs.readdir(dir, function processDir(err, data) {
        let arrayOut = [];
        if (err) {
            return callback(err);
        } else {
            
            data.forEach(element => {
                if (element.endsWith("." + fileExtension)) {
                    arrayOut.push(element);
                }
            });
        }
    
        callback(null, arrayOut);
    });
};


