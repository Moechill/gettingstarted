const EventEmitter = require ('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=>{
    console.log('data revieved')
} )

customEmitter.emit('response')