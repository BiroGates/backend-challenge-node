// Validações
import { validEmail } from '../../util/validation/validEmail.js';
import { validName } from '../../util/validation/validName.js'
import { myError } from '../../util/err/customError.js';
import { validCpf } from '../../util/validation/validCpf.js';

// Important
import { doQuery } from '../../util/validation/doQuery.js';
import * as repo from '../../repository/client/accountRepository.js';

export async function signIn(client) {
  if(!client.email || !client.senha)
    throw new myError('Digite todos os campos!', 400);
  
  else if (validEmail(client.email) === false)
    throw new myError('Email inválido.', 400);
  
  else if (typeof client.email === 'undefined' || client.email === '')
    throw new myError('E-mail obrigatório.', 400);
  
  else if (typeof client.senha === 'undefined' || client.senha === '')
    throw new myError('Senha obrigatória.', 400);

  const r = await repo.signIn(client);
  if(!r.length)
    throw new myError('Credencias inválidas!', 401);
  return r[0];
}

export async function createAccount(client) {
  if(client.name?.length > 200)
    throw new myError('Limite de caracteres excedido!', 400);
  
  else if (!client.name || !client.cpf ||
           !client.birth|| !client.active ||
           !client.email|| !client.password)
    throw new myError('Digite todos os campos!', 400);
  
  else if(typeof(client.active) !== 'boolean')
    throw new myError('Digite o valor correto de cada campo!', 400);

  else if (!validName(client.name) === false)
    throw new myError('Digite um nome valido!', 400);
  
  else if (validCpf(client.cpf) === false)
    throw new myError('Digite um cpf valido!', 400);
  
  else if (!validEmail(client.email))
    throw new myError('Digite um email valido!', 400);

  else if (client.password?.length < 4)
    throw new myError('Senha muito fraca!', 400);
  
  // Verificando se já existe um email ou cpf como esse no banco de dados
  else if(await doQuery(client.email, `select ds_email from tb_client where ds_email = ?`) === true)
    throw new myError('Email já existente!', 400);

  else if(await doQuery(client.cpf, `select ds_cpf from tb_client where ds_cpf = ?`) === true)
    throw new myError('CPF já cadastrado!', 400);

  let r = await repo.createAccount(client);
  return r
}