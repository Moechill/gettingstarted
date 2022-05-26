const http = require('http')

const server = http.createServer()

 server.on = http('request',(req, res)=>{
     res.end('welcome you sucker')
 })

server.listen(5000)