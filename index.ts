import express from 'express'
const app = express();

app.get('/', function (request, responose) {
    responose.send('Hello World!');
});
const port = 4000
app.listen(port, function () {
    console.log(`Example app listening on${port}`);
});
