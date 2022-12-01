// jwt
import { generateAdminToken } from '../../repository/connection/auth.js';

import { handleError } from '../../util/err/customError.js';
import { Router } from 'express';
import * as services from '../../services/admin/accountServices.js';

const server = Router();

// Endpoint responsável por fazer o login de um administrador
server.post('/login', async (req, resp) => {
  try {
    const admin = req.body;
    let r = await services.signIn(admin);
    const jwt = generateAdminToken(r)
    
    resp.send({
      token: jwt
    });
  } catch (error) {
    
    handleError(error, resp, req)
  }
});


export default server;