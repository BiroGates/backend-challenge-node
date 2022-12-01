import { con } from '../../repository/connection/base.js';
export async function doQuery(info, query) {
  const [r] = await con.query(query, [info]);

  let isEmpty;
  // Vendo se a array retornada esta vazia
  if(!r.length === true)
    isEmpty = true;
  else
    isEmpty = false

  return isEmpty
}