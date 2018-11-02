const app = require('./app');

const port = 5000;

app.get('/', (req, res) => {
    res.send(
        'Default index route of algoplayground-1'
    );
});

app.listen(port, () => console.log(
    `Server started on port ${port}`));