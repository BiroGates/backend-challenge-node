import * as repo from '../../repository/admin/productRepository.js';


export async function insertProduct(product) {
  if(!product.name || !product.active)
    throw new Error('Digite todos os campos.');
  else if (product.name.length > 200)
    throw new Error('Limite de caracteres excedido!')
  else if (typeof(product.name) !== 'string' || typeof(product.active) !== 'boolean')
    throw new Error('Digite o valor correto pra cada campo.');

  const r = await repo.insertProduct(product);
  return r;
}