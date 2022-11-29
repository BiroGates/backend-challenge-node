import { handleError } from '../../util/err/customError.js';
import * as services from '../../services/admin/productServices.js';
import { Router } from 'express';

const server = Router();

server.get('/product', async (req, resp) => {
  try {
    const r = await services.listProducts();
    resp.send(r);
  } catch (error) {
    handleError(error, resp);
  }
});

server.post('/product', async (req, resp) => {
  try {
    const product = req.body;
    const r = await services.insertProduct(product);
    resp.send({
      insertedId: r
    });
  } catch (error) {
    handleError(error, resp);
  }
});

export default server;