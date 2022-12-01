import { handleError } from '../../util/err/customError.js';
import { Router } from 'express';
import * as services from '../../services/admin/ordersServices.js';

const server = Router();

server.get('/orders', async (req, resp) => {
  try {
    const r = await services.listOrders();
    resp.send(r);
  } catch (error) {
    handleError(error, resp, req);
  }
});

export default server;