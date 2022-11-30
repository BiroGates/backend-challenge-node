import { myError } from '../../util/err/customError.js';
import { validEmail } from '../../util/validation/validEmail.js';
import * as repo from '../../repository/admin/accountRepository.js';

export async function signIn(fields) {
  if(!fields.email || !fields.senha)
    throw new myError('Digite todos os campos!', 400);
  
  else if (validEmail(fields.email) === false)
    throw new myError('Email inválido.', 400);
  
  else if (typeof fields.email === 'undefined' || fields.email === '')
    throw new myError('E-mail obrigatório.', 400);
  
  else if (typeof fields.senha === 'undefined' || fields.senha === '')
    throw new myError('Senha obrigatória.', 400);

  const r = await repo.signIn(fields);
  if(!r.length)
    throw new myError('Credencias Inválidas!', 401);
 
  return r[0];
}