const http = require('http');
const fs = require('fs');
/* I really like the path module */
const path = require('path'); // <-- I added this

// const hello = require('/.hello.html');
const port = 8080;


/**
 * Server looks great! Though I couldn't get the about page or 404 page to work I added in a 
 * solution that has error handling for a 500 or a 404
 */
//get rid of first write/read, add another if to go to / or home page
// const server = http.createServer((req, res) => {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.readFile('hello.html', function(error, data){ 
//             if(req.url === '/about'){
//                 fs.readFile('about.html', function(data){
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.write(data);
//                 });
//             }
//             else if(error){
//                 res.writeHead(404);
//                 res.write('Error: File not found');
//             } else {
//                 res.write(data);
//             } 
//             res.end();
//         }) 
// });

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'hello.html' : req.url);

    fs.readFile(filePath, (err, data) => {
        if(err) {
            if(err.code == 'ENOENT') {
                res.writeHead(404);
                res.end(`Sorry couldn't find that page`);
            } else {
                res.writeHead(500);
                res.end(`Server Error, everything must be on fire by now`);
            }
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
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