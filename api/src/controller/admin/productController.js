import * as services from '../../services/admin/productServices.js';
import { Router } from 'express';

const server = Router();


server.post('/product', async (req, resp) => {
  try {
    const product = req.body;
    const r = await services.insertProduct(product);
    resp.send({
      insertedId: r
    });
  } catch (error) {
    resp.status(400).send({
      x: error.message
    })
  }
});

export default server;