const globalConfig = require('config');
const app = require('./config/App.config');

const generalConfig = globalConfig.get('General');
const hostConfig = generalConfig.get('host');

console.log(`Server running at port:${hostConfig.port}`);
app.listen(hostConfig.port);
