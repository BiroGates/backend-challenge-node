import { con } from "../connection/base.js";


export async function signIn(admin) {
  const command = `
  select  	ds_email   as email,
            ds_senha   as senha
  from 		  tb_admin
  where   	ds_email  = ? and ds_senha  = ?`;
  const [r] = await con.query(command, [admin.email, admin.senha]);
  return r;
}