const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

const port = process.env.PORT || 80; // Listen on port 80 inside the container
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

