const fs = require('fs');


const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<h1>Welcome to my Webpage</h1>')
        res.write('<p>Please Submit User Names</p>')
        res.write('<body><form action="/create-user" method="POST"><input type ="text" name = "username"><button type = "submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

     if (url === '/users') {
       
        res.setHeader('Content-Type', 'text/html');
        const names = fs.readFileSync("./users.txt",(err,fileContent) =>{if (err) throw err});
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<h1>Available Users</h1>')
        res.write('<body><ul><li>Harry</li><li>Ted</li><li>Karen</li><li></li></ul></body>');      
        res.write(names);
        res.write('</html>');

        //fs.readFile();
        return res.end();
    }


    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
           body.push(chunk); 
           //res.statusCode = 302;
           //res.setHeader('Location','/');
           //res.end();
        });


        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
            const userNames = parsedBody.split('=')[1];
            fs.writeFileSync('users.txt', userNames);
        });
        //fs.writeFileSync(users.txt, parsedBody.split('='[1]));
        res.statusCode = 302;
        res.setHeader('Location','/');
        res.end();
    }

    


// HTML response with "page not found"
};

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
