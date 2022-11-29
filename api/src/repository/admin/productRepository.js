import { con } from '../connection/base.js';

export async function listProducts(){ 
  const command = `
    select  nm_product  as name,
            bt_active   as active
    from    tb_product
  `;

  const [r] = await con.query(command, []);
  return r;
}


export async function insertProduct(product) {
  const command = `
    insert into tb_product (nm_product, bt_active) 
                    values (?, ?)
  `;
  const [r] = await con.query(command, [product.name, product.active]);
  return r.insertId;
}
