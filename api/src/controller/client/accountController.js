import { handleError } from '../../util/err/customError.js';
import * as services from '../../services/client/accountServices.js';
import { Router } from 'express';

const server = Router();



// Endpoint responsável por fazer o login de um client
server.post('/login', async (req, resp) => {
  try { 
    const client = req.body;
    const r = await services.signIn(client);
    resp.send(r);
  } catch (error) {
    handleError(error, resp, req)
  }
});

// Endpoint responsável por
server.post('/account', async (req, resp) => {
  try {
    const client = req.body;
    const r = await services.createAccount(client);
    resp.send({
      insertedId: r
    });
  } catch (error) {
    handleError(error, resp, req);
  }
});


export default server;