// Jwt
import { generateToken } from '../../repository/connection/auth.js';

import { handleError } from '../../util/err/customError.js';
import { Router } from 'express';

import * as services from '../../services/client/accountServices.js';

const server = Router();



// Endpoint responsável por fazer o login de um client
server.post('/login', async (req, resp) => {
  try { 
    const client = req.body;
    const r = await services.signIn(client);
    const jwt = generateToken(r);
    resp.send({
      token: jwt
    });
  
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