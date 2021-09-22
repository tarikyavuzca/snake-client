const connect = require('./client'); //==> connect Function
const setupInput = require('./input'); //==> setupInput function

console.log('Connecting Server...');
let connection = connect();
setupInput(connection);

