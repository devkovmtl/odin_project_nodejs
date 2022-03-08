const https = require('https');

const req = https.request(
  {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/todos',
    method: 'GET',
  },
  (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', (d) => {
      process.stdout.write(d);
    });
  }
);

req.on('error', (error) => {
  console.error(error);
});

req.end();
