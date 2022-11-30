export function validCpf(cpf) {
  let regexp = /[a-zA-z/+}{[`~:,<>|!@#$%¨&*()_=.-]/igm;
  if (regexp.test(cpf.toLowerCase().trim()) === true || cpf.length > 11 || cpf.length < 11)
    return false;
  else
    return true;
}