const http = require('http')

const myserver = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.end('welcome to my new server')
    }

    if (req.url === '/about'){
        res.end('the about you page')
    }
    
    res.end(`
    <h1> OOOOOpppaa </h1>
<p> Something went wrong, click here to go back to main -> </p>
<a href = "/"> back home </a>
    `)
    
})

myserver.listen(5000)