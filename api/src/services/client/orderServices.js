// Important
import * as repo from '../../repository/client/orderRepository.js';
import { myError } from '../../util/err/customError.js';
import { doQuery } from '../../util/validation/doQuery.js';

export async function makeOrder(id_client, id_product, order) {
  if(!order.valuePurchase || !order.qtdPurchase)
    throw new myError('Preencha todos os campos!', 400);
  
  else if(!id_client)
    throw new myError('Por favor faça o login primeiro!');

  else if(!id_product ||await doQuery(id_product, `select * from tb_product where id_product = ?`) === true)
    throw new myError('Produto invalido!', 400);

  else if(typeof(order.valuePurchase) !== 'number' || typeof(order.qtdPurchase) !== 'number')
    throw new myError('Digite o valor certo para cada campo!', 400);
  
  else if(order.valuePurchase <= 0 || order.qtdPurchase <= 0)
    throw new myError('Não é possível realizar uma comprar de valor menor que R$ 00,00');

  order = {
    total: order.valuePurchase * order.qtdPurchase,
    ...order
  }
  
  const r = await repo.makeOrder(id_client, id_product, order);
  return r;
}
export async function listOrders(id_client) {
  if(await doQuery(id_client, `select * from tb_client where id_client = ?`) === true)
    throw new myError('Cliente inválido!', 400); 
  
  const r = await repo.listOrders(id_client); 
  if(!r.length === true)
    throw new myError('Nenhuma compra realizada!', 404);
  return r;
}