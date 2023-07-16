const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/scripts/script.js') {
    // Read the script.js file
    fs.readFile(path.join(__dirname, 'scripts/script.js'), (err, content) => {
      if (err) {
        // If there's an error reading the file, send a 500 response
        res.writeHead(500);
        res.end('Error loading script.js');
      } else {
        // Send a 200 OK response with the contents of script.js
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(content);
      }
    });
  } else {
    // Read the index.html file
    fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
      if (err) {
        // If there's an error reading the file, send a 500 response
        res.writeHead(500);
        res.end('Error loading index.html');
      } else {
        // Send a 200 OK response with the contents of index.html
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  }
});

const port = 3000; // Choose the port you want to use
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

