const http = require('http');
const fs = require('fs');
// const hello = require('/.hello.html');
const port = 8080;

const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('hello.html', function(error, data){
            if(error){
                res.writeHead(404);
                res.write('Error: File not found');
            } else {
                res.write(data);
            } 
            res.end();
        }) 
});

server.listen(port, (error) =>{
    if (error){
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});

    // var hello = res.write(`<h1>Hello World!</h1>`);
    //     res.write(hello);
        // res.write.document(`<h1>Hello World!</h1>`)
    // res.write(body.innerHTML = `${<h1>Hello again, World!</h1>}`);