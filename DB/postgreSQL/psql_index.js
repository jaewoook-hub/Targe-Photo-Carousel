const newRelic = require('newrelic');
const app = require('./psql_server.js');

app.listen(3001, () => {
  console.log('Listening on port 3001...')
})