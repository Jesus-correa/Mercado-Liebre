//Requerimiento Express
const express = require('express');
const app = express();

//Requerimiento path
const path = require('path')
//Rutas con path
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

//Asignacion al puerto
const port = process.env.PORT || 3000
app.listen(3000,() => {
    console.log("http://localhost:"+ port);
});

//Funcionalidad y asignacion del html raiz
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

//Funcionalidad de html secundarios
app.get('/views/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/views/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/views/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/'))
})