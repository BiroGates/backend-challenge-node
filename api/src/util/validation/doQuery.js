import { con } from '../../repository/connection/base.js';
export async function doQuery(info, query) {
  const [r] = await con.query(query, [info]);
  
  let isEmpty;
  if(!r.length === false)
    isEmpty = true;
  else
    isEmpty = false

  return isEmpty
}