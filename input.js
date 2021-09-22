/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

// Stores the active TCP connection object.
let conn;

// const setupInput = function(conn) {
  
// }

const setupInput = function(connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  

  const handleUserInput = process.stdin.on('data', (key) => {
    if (key ===  '\u0003'){
      process.exit();
    } else if( key === 'w'){
      conn.write("Move: up");
    } else if( key === 'a'){
      conn.write("Move: left");
    } else if( key === 's'){
      conn.write("Move: down");
    } else if( key === 'd'){
      conn.write("Move: right");
    }
    conn.write(`Say: We are live baby !!!${key}`);
  });

  return stdin;
}
module.exports = setupInput;