const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', (data) => {
  console.log('Started', data);
});

eventEmitter.emit('start', 42);
