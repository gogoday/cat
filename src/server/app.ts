const http = require('http')
http.creatServer((req, res) => {

  res.end('ok');
}).listen(8082)
