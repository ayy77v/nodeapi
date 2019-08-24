const EventEmitter = require('events');



//emitter.emit('messageLogged', {id:1, url:'http://'});

const Logger=require('./logger');
const logger= new Logger();
logger.on('messageLogged', (arg)=>{
	console.log('Listenner called',arg)
})
logger.log('message');