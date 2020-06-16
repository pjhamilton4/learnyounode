const fs = require('fs');

const cmd_args = process.argv;

function computeLines(callback){
    fs.readFile(cmd_args[2], function doneReading(err, data){
        let temp = 0;
        if (err) {
            console.log('Error finding files: ' + err)
        } else {
            console.log('Counting lines...');
    
            const str = data.toString();
    
            const split_str = str.split('\n');
    
            split_str.forEach((value, index) => {
                if (index < split_str.length - 1) {
                    temp++;
                }
            });
        }
    
        callback();
    })
}

let count = 0;

function readFileAndCount(){
    console.log(count);
    
}

computeLines(readFileAndCount);



