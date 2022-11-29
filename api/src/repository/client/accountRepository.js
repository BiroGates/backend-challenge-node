import { con } from "../connection/base.js";

export async function signIn(client) {
  const command = `
    select  nm_client as name,
            ds_cpf    as cpf,
            dt_birth  as birth,
            bt_active as active
    from    tb_client
    `;

  const [r] = await con.query(command, []);
  return r;
}