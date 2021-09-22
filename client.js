const {IP, PORT} = require('./constant');


const net = require('net');


const connect = function(data) {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); // setting encoding into human readable msg


  conn.on('connect', (data) => {  
    console.log("Successfully connected to game server");
  })
  conn.on('data', (data) => { //get message back from server
    console.log('NEW MESSAGE FROM THE SERVER', data)
  })
  return conn;
}
module.exports = connect;

