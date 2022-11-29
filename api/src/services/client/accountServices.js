import { myError } from '../../util/err/customError.js';
import * as repo from '../../repository/client/accountRepository.js';

export async function signIn(client) {
  if(!client.email || !client.senha)
    throw new myError('Digite todos os campos!', 400);
  
  else if (isEmail(client.email) === false)
    throw new myError('Email inválido.', 400);
  
  else if (typeof client.email === 'undefined' || client.email === '')
    throw new myError('E-mail obrigatório.', 400);
  
  else if (typeof client.senha === 'undefined' || client.senha === '')
    throw new myError('Senha obrigatória.', 400);

  const r = await repo.signIn(client);
  if(!r.length)
    throw myError('Credencias inválidas!', 401);
  return r;
}