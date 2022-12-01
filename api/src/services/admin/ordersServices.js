import { myError } from '../../util/err/customError.js';
import * as repo from '../../repository/admin/ordersRepository.js';


export async function listOrders() {
  const r = await repo.listOrders();
  if(!r.length)
    throw new myError('Nenhuma ordem inserida!', 404);
  return r;
}