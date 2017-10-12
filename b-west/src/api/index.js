import express from 'express';


const server = express();

server.get('/*', (req, res, next) => {
    res.send({
        success: true
    })
})
export default server;
