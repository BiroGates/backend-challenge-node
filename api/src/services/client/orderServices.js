// Important
import * as repo from '../../repository/client/orderRepository.js';
import { myError } from '../../util/err/customError.js';
import { doQuery } from '../../util/validation/doQuery.js';

export async function makeOrder(id_client, id_product, order) {
  if(!id_client || !id_product 
    || !order.valuePurchase || !order.qtdPurchase)
    throw new myError('Preencha todos os campos!', 400);
  
  else if(doQuery(id_client, `select * from tb_client where id_client = ?`) === false)
    throw new myError('Cliente não encontrado!', 400);
  
  else if(doQuery(id_product, `select * from tb_product where id_product = ?`) === false)
    throw new myError('Produto invalido!', 400);

  else if(typeof(order.valuePurchase) !== 'number' || typeof(order.qtdPurchase) !== 'number')
    throw new myError('Digite o valor certo para cada campo!', 400);

  order = {
    total: order.valuePurchase * order.qtdPurchase,
    ...order
  }
  
  const r = await repo.makeOrder(id_client, id_product, order);
  return r;
}


export async function listOrder() {
  
}