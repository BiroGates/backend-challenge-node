import { myError } from '../../util/err/customError.js';
import * as repo from '../../repository/admin/productRepository.js';

export async function listProducts() {
  const r = await repo.listProducts();
  if(!r.length)
    throw new myError('Nenhum produto inserido!', 404);
  return r;
}


export async function insertProduct(product) {
  if(!product.name || product.active === undefined)
    throw new myError('Digite todos os campos.', 415);

  else if (product.name.length > 200)
    throw new myError('Limite de caracteres excedido!', 400)
  
    else if (typeof(product.name) !== 'string' || typeof(product.active) !== 'boolean')
    throw new myError('Digite o valor correto pra cada campo.', 415);

  const r = await repo.insertProduct(product);
  return r;
}