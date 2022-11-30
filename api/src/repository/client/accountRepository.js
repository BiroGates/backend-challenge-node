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

export async function createAccount(client) {
  const command = `
    insert into tb_client (nm_client, ds_email, ds_password, ds_cpf, dt_birth, bt_active)
                    values(?, ?, ?, ?, ?, ?)
  `;

  const [r] = await con.query(command, [client.name, client.email, client.password, client.cpf, client.birth, client.active]);
  return r.insertId;
}