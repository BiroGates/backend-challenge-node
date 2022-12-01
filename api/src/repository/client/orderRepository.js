import { con } from '../../repository/connection/base.js';


export async function makeOrder(id_client, id_product, order) {
  const command = `
    insert into tb_order (id_client, id_product, vl_purchase, qtd_purchase, vl_total, dt_order)
                   values(?, ?, ?, ?, ?, ?)
  `;

  const [r] = await con.query(command, [id_client, id_product, order.valuePurchase, Math.floor(order.qtdPurchase), order.total, new Date()]);
  return r.insertId;
}

export async function listOrders(id_client) {
  const command = `
    select  nm_client     as name,
            ds_cpf        as cpf,

            nm_product    as nameProduct,
            
            vl_purchase   as valuePurchase,
            qtd_purchase  as qtdPurchase,
            vl_total      as total,
            dt_order      as date
    from    tb_order
    inner join tb_client on tb_order.id_client = tb_client.id_client
    inner join tb_product on tb_order.id_product = tb_product.id_product
    where tb_order.id_client = ?
  `;

  const [r] = await con.query(command, [id_client]);
  return r;
}