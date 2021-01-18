function telephoneCheck(str) {
  var primero = /^\d{3}-\d{3}-\d{4}/gm;
  var segundo = /^[(]\d{3}[)]\d{3}-\d{4}/gm;
  var tercero = /\(\d{3}\)\s\d{3}-\d{4}/gm;
  var cuarto = /\d{3}\s\d{3}\s\d{4}/gm;
  var quinto = /^\d{10}$/gm;
  var sexto = /^1\s?\([\s\)]?\d{3}\s?\)?-?[\s\)]?\d{3}\s?-?\d{4}/gm;
  var septimo = /^1\s?\d{3}\s?-?\d{3}\s?-?\d{4}/;

  if (str.match(primero) || str.match(segundo)) {
    return true;
  } else if (str.match(tercero) && str.match(cuarto)) {
    return true;
  } else if (str.match(quinto)) {
    return true;
  } else if (str.match(sexto)) {
    return true;
  } else if (str.match(septimo)) {
    return true;
  }
  return false;
}

telephoneCheck("555-555-5555");
