import express from 'express';

import api from './api'
import admin from './admin/index'
import publicPath from './public/index'

const server = express();


server.use('/api', api);
server.use('/admin', admin);
server.use('/', publicPath);

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR));

export default server;
