import * as service from '../../services/client/orderServices.js';
import { Router } from 'express';
import { handleError } from '../../util/err/customError.js';

const server = Router();

// Endpoint responsável por realizar um investimento
server.post('/product/:product/order', async (req, resp) => {
  try {
    const order = req.body;
    const id_product = req.params.product;
    const r = await service.makeOrder(req.client.id, id_product, order);
    
    resp.send({insertedId: r});
    
  } catch (error) {
    handleError(error, resp, req);
  
  }
});


// Endpoint responsavel por listar todos os investimentos
server.get('/order', async (req, resp) => {
  try {
    const r = await service.listOrders(req.client.id);     
    resp.send(r);
  
  } catch (error) {
    handleError(error, resp, req);   
  }
});

export default server;