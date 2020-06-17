const http = require('http');

const urls = [process.argv[2], process.argv[3], process.argv[4]]; //you can use slice here

let results = [];
let returnedCount = 0;

urls.forEach((url, index) => {

    let tempData = '';

    http.get(url, (res) => {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            tempData += chunk;
        });
        res.on('end', () => {
            storeResult(index, tempData);
        });
        res.on('error', console.error);
    });
});

function storeResult(index, res){
    results[index] = res;
    returnedCount++;

    if(returnedCount == 3){
        print();
    }
}

function print(){
    results.forEach(element => {
        console.log(element);
    });
};