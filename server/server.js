const app = require('./index.js');

const hostname = 'localhost';
const port = 1991;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
