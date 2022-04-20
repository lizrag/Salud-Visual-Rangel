import express from "express";
import routesRouter from './routes/routes.js'

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`App server is ready on port ${PORT}!`)
});

app.use(express.static('/public'));
app.use('/routes',routesRouter);