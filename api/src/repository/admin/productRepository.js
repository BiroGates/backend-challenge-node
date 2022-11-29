import { con } from '../connection/base.js';

export async function insertProduct(product) {
  const command = `
    insert into tb_product (nm_product, bt_active) 
                    values (?, ?)
  `;
  const [r] = await con.query(command, [product.name, product.active]);
  return r.insertId;
}
