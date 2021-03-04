const express = require ('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/about.html'));
})

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/projects.html'));
})

app.get('/projects/geolocation', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/projects/Geolocation api.html'));
})

app.post('/api', function (req, res) {
    res.send('POST request to the homepage')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})