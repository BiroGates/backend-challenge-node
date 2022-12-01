import jwt from 'jsonwebtoken'

const KEY = '!!backend-challenge!!';

export function generateToken(clientInfo) {
  return jwt.sign(clientInfo, KEY);
}

export function generateAdminToken(adminInfo) {
  adminInfo.role = 'admin';
  return jwt.sign(adminInfo, KEY);
}

export function clientPermission(req, resp, next) {
  try {
    let token = req.headers['x-access-token'];

    if(token === undefined) 
      token = req.query['x-access-token'];

    let signed = jwt.verify(token, KEY);
    
    req.client = signed;
      
    next();

  } catch (error) {
    resp.status(401).end();
  }
}

export function adminPermission(req, resp, next) {
  try {
    let token = req.headers['x-access-token'];

    if(token === undefined) 
      token = req.query['x-access-token'];

    let signed = jwt.verify(token, KEY);
    
    
    if(signed.role !== 'admin')
      return resp.status(401).end();
    
    req.client = signed;
    next();

  } catch (error) {
    resp.status(401).end();
  }
}

