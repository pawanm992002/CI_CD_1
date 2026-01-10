const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    console.log('route / called');
    res.send('route / called');
});

app.post('/', (req, res) => {
    console.log('..............', req.body);
    res.status(200).send('done');
})

app.get('/health', (req, res) => {
    console.log('working server');
    res.send('working server');
});

app.listen(PORT, () => {
    console.log('server is up.......')
})