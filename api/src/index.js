import 'dotenv/config';
import fs from 'fs'
import swaggerUi from 'swagger-ui-express';
import configRoutes from './routes.js';
import express from 'express'
import cors from 'cors';

// Configuração inicial
const server = express();
server.use(express.json());
server.use(cors());


// Arquivo responsável por configurar todas as rotas
configRoutes(server);


// Configurando Swagger pra documentação
const swaggerOptions = JSON.parse(fs.readFileSync('./src/swagger.json'));
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));

server.listen(process.env.PORT, ()=> console.log(`API running on PORT ${process.env.PORT}`));