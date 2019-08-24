const os = require('os');

var totalmemory=os.totalmem();
var freememory=os.freemem();

console.log('TotalMemory' + totalmemory);

console.log(`TotalMemory: ${totalmemory}`);
console.log(`FreeMemory: ${freememory}`)