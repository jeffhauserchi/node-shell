const pwd=require('./pwd');
const ls=require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) =>{
    const cmdStr = data.toString().trim();
    const cmd = cmdStr.split(' ');


    if (cmd[0]==='pwd') {
      pwd();
    } else if (cmd[0]==='ls') {
      ls();
    } else if (cmd[0]==='cat') {
      cat(cmd[1]);
    } else if (cmd[0]==='curl') {
      curl(cmd);
    }



});
