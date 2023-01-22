const events = require('events');

const eventEmitter = new events.EventEmitter();

//listen for an event
//Event name: ready

eventEmitter.on('newUser', (name) => {
    console.log(`Welcome, ${name}`);
})

eventEmitter.emit('newUser', 'Divine');