import * as services from '../../services/admin/accountServices.js';
import { Router } from 'express';

const server = Router();


server.post('/login', async (req, resp) => {
  try {
    const admin = req.body;
    let r = await services.signIn(admin);
    resp.send(r);
  } catch (error) {
    resp.status(400).send({
      x: error.message
    }) 
  }
});


export default server;