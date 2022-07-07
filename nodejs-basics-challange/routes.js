const fs = require('fs');

const requestHandler = (req, res)=>{

    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<body><h1>Welcome to the challange!</h1></body>')
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Create</button></form></body>')
        res.write('</html>');
        return res.end();
    }

    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<body><ul><li>User1</li><li>User2</li></ul></body>')
        res.write('</html>');
        return res.end();
    }
    
    if(url === '/create-user' && method == 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
    
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            
            console.log(message);

            res.statusCode =302;
            res.setHeader('Location', '/');
            return res.end();
        })
        
        
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<body><h1>Anything else!</h1></body>')
    res.write('</html>');
    res.end();
};

module.exports.handler = requestHandler;