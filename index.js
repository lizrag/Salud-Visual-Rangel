import express from "express";
import router from './routes/routes.js';
import __dirname from "./utils.js";

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`App server is ready on port ${PORT}!`)
});

app.use(express.static('public'));
app.use('/',router);



