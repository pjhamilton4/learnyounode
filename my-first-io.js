const fs = require('fs');

const cmd_args = process.argv;

const buffer = fs.readFileSync(cmd_args[2]);

const str = buffer.toString();

const split_str = str.split('\n');

let count = 0;

split_str.forEach((value, index) => {
    if(index < split_str.length-1)
    {
        count++;
    }
});

console.log(count);
