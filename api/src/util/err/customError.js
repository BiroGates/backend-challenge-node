export class myError{
  constructor(msg, status) {
    this.msg = msg;
    this.status = status;
  }
}

export function handleError(error, resp) {
  resp.status(error.status).send({
    x: error.msg
  });   
}