var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type" : "text/plain"
    });
    response.write("Welcome to Nodejs");
    response.end();
}).listen(8000, "127.0.0.1");
console.log("这是第二笔提交号码");
console.log("Creat server on http://127.0.0.1:8000/");
console.log("这是一个不错的教程,我学会的很多东西,测试1234");
console.log();