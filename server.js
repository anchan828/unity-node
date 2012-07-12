var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
var html = 'マシン名 unityは頂いた！\n';
  html+='<a href="http://twitter.com/kyusyukeigo">@kyusyukeigo</a>'
res.end();
}).listen(80);
