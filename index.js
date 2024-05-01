const http = require('http');
const port = 3000; // Порт, на котором будет работать сервер

// Создание HTTP-сервера
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'}); // Установка заголовка Content-Type для всех ответов как text/html
    const url = req.url;
    if (url === '/about') {
        res.write('<h1>About us page</h1>'); // Отправка ответа
        res.end(); // Завершение ответа
    } else if (url === '/contact') {
        res.write('<h1>Contact us page</h1>'); // Отправка ответа
        res.end(); // Завершение ответа
    } else {
        res.write('<h1>Hello World!</h1>'); // Отправка ответа
        res.write('<h2>My name is Viktoriia</h2>'); // Отправка ответа
        res.end(); // Завершение ответа
    }
});

// Прослушивание порта и адреса сервера
server.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/`);
});