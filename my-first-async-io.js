const fs = require('fs');

const cmd_args = process.argv;

let count = 0;

function computeLines(callback){
    fs.readFile(cmd_args[2], function doneReading(err, data){
        if (err) {
            console.log('Error finding files: ' + err)
        } else {
            const str = data.toString();
    
            const split_str = str.split('\n');
    
            split_str.forEach((value, index) => {
                if (index < split_str.length - 1) {
                    count++;
                }
            });
        }
    
        callback();
    });
};

function readFileAndCount(){
    console.log(count);
    
}

computeLines(readFileAndCount);



