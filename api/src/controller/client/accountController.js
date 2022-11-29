import { handleError } from '../../util/err/customError.js';
import * as services from '../../services/client/accountServices.js';
import { Router } from 'express';

const server = Router();


server.post('/login', async (req, resp) => {
  try { 
    const client = req.body;
    const r = await services.signIn(client);
    resp.send(r);
  } catch (error) {
    handleError(error, resp)
  }
});



export default server;