const next = require('next');
const url = require('url');
const path = require('path');
const http = require('http');
const express = require('express');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV != 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

    const server = express();

    server.use(express.json());

    server.get('/post/:name', (req, res) => {
        const routeParams = { ...req.params, ...req.query };
        return app.render(req, res, '/post', routeParams);
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        console.log(`Listening on port ${port}`);
    })
});