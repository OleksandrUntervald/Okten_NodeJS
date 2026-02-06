// Встановіть nvm. Перегляньте доку Node.js та знайдіть варіант налаштувати HTTP server через один з вбудованих модулів

const http = require('node:http');

// Create an HTTP server
const func = () => {
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'Hello Bro!',
        }));
    });

    server.listen(3000);
}

func()
