import { con } from '../../repository/connection/base.js';


export async function makeOrder(id_client, id_product, order) {
  const command = `
    insert into tb_order (id_client, id_product, vl_purchase, qtd_purchase, vl_total, dt_order)
                   values(?, ?, ?, ?, ?, ?)
  `;

  const [r] = await con.query(command, [id_client, id_product, order.valuePurchase, order.qtdPurchase, order.total, new Date()]);
  return r.insertId;
}