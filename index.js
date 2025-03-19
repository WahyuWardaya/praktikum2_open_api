import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hellow world!');
});
server.listen(3000, () => console.log('server berjalan di port 3000!'));
