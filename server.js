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


    server.get('/post/:name', (req, res) => {
        return app.render(req, res, '/post', { ...req.params, ...req.query });
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        console.log(`Listening on port ${port}`);
    })
});