import { con } from '../connection/base.js';

export async function listOrders() {
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
  `;

  const [r] = await con.query(command, []);
  return r;
}