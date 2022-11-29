import * as repo from '../../repository/admin/accountRepository.js';

export async function signIn(fields) {
  let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!fields.email || !fields.senha)
    throw new Error('Digite todos os campos!');
  else if (!regexp.test(fields.email.toLowerCase()))
    throw new Error('Email inválido.');
  else if (typeof fields.email === 'undefined' || fields.email === '')
    throw new Error('E-mail obrigatório.');
  else if (typeof fields.senha === 'undefined' || fields.senha === '')
    throw new Error('Senha obrigatória.');

  const r = await repo.signIn(fields);
  if(!r.length)
    throw new Error('Credencias Inválidas!');
  return r[0];
}