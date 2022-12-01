import { handleError } from '../../util/err/customError.js';
import { Router } from 'express';
import * as services from '../../services/admin/productServices.js';

const server = Router();

// Endpoint responsável por listar todos os produtos
server.get('/product', async (req, resp) => {
  try {
    const r = await services.listProducts();
    resp.send(r);
  
  } catch (error) {
    handleError(error, resp, req);
  }
});

// Endpoint responsável por inserir um produto no banco de dados 
server.post('/product', async (req, resp) => {
  try {
    const product = req.body;
    const r = await services.insertProduct(product);
    resp.send({
      insertedId: r
    });
  
  } catch (error) {
    handleError(error, resp, req);
  
  }
});

export default server;