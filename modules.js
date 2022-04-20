const os = require('os');

const user = os.uptime();


const osinfo = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

const path = require('path');
console.log(path.sep)