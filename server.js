const http = require('http')

const myserver = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.end('welcome to my new server')
    }

    else if (req.url === '/about'){
        res.end('the about you page')
    }
    
    else{res.end('page not found')
    }
})

myserver.listen(5000)
