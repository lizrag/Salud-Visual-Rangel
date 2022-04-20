import express from "express";

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    return res.send('Hello world, Liz!');
});

app.listen(port, () => {
    console.log(`App server is ready on port ${port}!`)
});