import app from "./app";

const port = app.get('port')

process.on('uncaughtException', function (err) {
    console.log('Error Capturado: ', err.stack);
});

app.listen(port)
console.log('Server listening on port',port)