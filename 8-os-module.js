// Built-in Modules
// - OS
// - path
// - fs
// - http

const os = require('os');
// Current User Info
const user = os.userInfo();
console.log(user);

// Host Name
const myPC = os.hostname()
console.log(myPC);

// System Uptime
console.log(`The system uptime is ${os.uptime()} sec.`);

const currentOS = {
    osName: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);
