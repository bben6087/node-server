const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('My name is Blake Bennett\n')
  res.write('Thank you for accessing my simple web server I created!\n')
  res.write('Follow my README.md file if you want to create your own web server\n')
  res.end('Until next time!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});