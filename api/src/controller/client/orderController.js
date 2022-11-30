import * as service from '../../services/client/orderServices.js';
import { Router } from 'express';
import { handleError } from '../../util/err/customError.js';

const server = Router();

server.post('/:client/product/:product/order', async (req, resp) => {
  try {
    const order = req.body;
    const id_client = req.params.client;
    const id_product = req.params.product;
    const r = await service.makeOrder(id_client, id_product, order);
    resp.send({
      insertedId: r
    });
  } catch (error) {
    handleError(error, resp, req);
  }
});

export default server;