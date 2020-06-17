const net = require('net');

const server = net.createServer(function (socket) {
    let currentDttm = new Date();

    socket.end(currentDttm.getFullYear() + "-" + (currentDttm.getMonth()+1).toString().padStart(2, 0) + "-" + currentDttm.getDate().toString().padStart(2, 0)
        + " " + currentDttm.getHours().toString().padStart(2, 0) + ":" + currentDttm.getMinutes().toString().padStart(2, 0) + '\n');
});

server.listen(process.argv[2]);