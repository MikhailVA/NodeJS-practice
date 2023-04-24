const fs = require('fs');

const routeHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Hello new user!</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const output = [];
        req.on('data', (chunk) => {
            output.push(chunk);
            console.log(output.toString().split('=')[1]);
        });
        return req.on('end', () => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }


};

module.exports = routeHandler;