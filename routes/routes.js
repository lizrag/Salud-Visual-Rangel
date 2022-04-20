import express from "express";

const routesRouter = express.Router();

routesRouter.get('/', (req, res) => {
    return res.send('Hello world, Liz!');
});

export default routesRouter;