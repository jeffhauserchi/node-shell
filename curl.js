const req=require('request');

function curl(cmd) {
  console.log(cmd)
  if (cmd[1]==='GET') {
    req(cmd[2],function(err,rsp,body) {
      console.log('error:',err);
      console.log('statusCode:',rsp && rsp.statusCode);
      console.log('body:',body);
      console.log(' \nprompt> ');
    })
  }
}

module.exports=curl;
