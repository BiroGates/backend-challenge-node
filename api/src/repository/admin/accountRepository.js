import { con } from "../connection/base.js";


export async function signIn(admin) {
  const command = `
  select  	id_admin      as id,
            ds_email      as email,
            ds_password   as password
  from 		  tb_admin
  where   	ds_email  = ? and ds_password  = ?`;
  
  const [r] = await con.query(command, [admin.email, admin.password]);
  return r;
}