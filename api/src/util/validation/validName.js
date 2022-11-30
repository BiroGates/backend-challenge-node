export function validName(name) {
  let regexp = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  if (!regexp.test(name.toLowerCase().trim()))
    return true;
  else
    return false;
}