const EventEmitter = require ('events')


const customEmitter = new EventEmitter()

customEmitter.on('response', (id, name)=>{
    console.log(`data revied ${name} with the id: ${id}`)
} )
 
customEmitter.on('response', (lel, kek)=>{
    console.log(`nene ${lel} ach ja und der ${kek}`)
})
customEmitter.emit('response', 34, 'Arne') 