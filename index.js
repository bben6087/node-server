const http = require('http');
const fs = require('fs');
const hostname = process.env.hostname||'0.0.0.0';
const port = process.env.PORT||3002;

fs.readFile('./index.html', function (err, html) {
  if (err) {
      throw err; 
  }       
  http.createServer(function(request, response) {  
      response.writeHeader(200, {"Content-Type": "text/html"});  
      response.write(html);  
      response.end();  
      console.log(`Server running at http://${hostname}:${port}/`);
  }).listen(port, hostname);
});