import configRoutes from './routes.js';
import 'dotenv/config';
import express from 'express'
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

// Arquivo responsável por configurar todas as rotas
configRoutes(server);

server.listen(process.env.PORT, ()=> console.log(`API running on PORT ${process.env.PORT}`));