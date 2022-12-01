import { writeFileSync } from 'fs'
export class myError{
  constructor(msg, status) {
    this.msg = msg;
    this.status = status;
    this.typeError = 'customError';
  }
}

export function handleError(error, resp, req) {
  // Verificando se o tipo do erro é personalizado
  if(error.typeError === 'customError')
    resp.status(error.status ? error.status : 400).send({
      x: error.msg
    });
  
  else {
    // Criando arquivo de erro em "logs"
    let errorCode = Math.floor(Math.random() * 100000);
    let errorData = `errorName - ${error.name} \nerrorMessage - ${error.message} \nerrorDate - ${new Date()} \n\nPATH - ${resp.req.originalUrl} \nMETHOD - ${req.method}`;
    
    writeFileSync(`./src/util/err/logs/log - ${errorCode}.txt`, errorData);
    
    resp.status(400).send({
        ErrorCode: errorCode
    });
  }
}