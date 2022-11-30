import { handleError } from '../../util/err/customError.js';
import * as services from '../../services/admin/accountServices.js';
import { Router } from 'express';

const server = Router();

// Endpoint responsável por fazer o login de um administrador
server.post('/login', async (req, resp) => {
  try {
    const admin = req.body;
    let r = await services.signIn(admin);
    resp.send(r);
  } catch (error) {
    handleError(error, resp, req)
  }
});


export default server;